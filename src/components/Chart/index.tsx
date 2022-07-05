import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";

interface ChartProps {
  title?: string;
  options: any;
}

const Chart: React.FC<ChartProps> = (props) => {
  const { options, title } = props;

  const [curStyle, setCurStyle] = useState<React.CSSProperties>({
    height: "100vh",
  });

  const chartRef = useRef<any>(null);
  let chartInstance = null as any;

  // 定义渲染函数
  function renderChart() {
    try {
      // `echarts.getInstanceByDom` 可以从已经渲染成功的图表中获取实例，其目的就是在 options 发生改变的时候，不需要
      // 重新创建图表，而是复用该图表实例，提升性能
      const renderedInstance = echarts.getInstanceByDom(chartRef.current);
      if (renderedInstance) {
        chartInstance = renderedInstance;
      } else {
        chartInstance = echarts.init(chartRef.current);
      }
      chartInstance.setOption(options);

      console.log(chartRef.current, "chartRef.current");

      setTimeout(() => {
        setCurStyle({
          height: "50vh"
        })
      }, 1000);
    } catch (error: any) {
      console.error("error", error.message);
      chartInstance && chartInstance.dispose();
    }
  }

  // 定义窗口大小发生改变执行的回调函数
  function resizeHandler() {
    chartInstance.resize();
  }

  // 页面初始化时，开始渲染图表
  useEffect(() => {
    renderChart();

    eventsCharts();

    return () => {
      // 销毁图表实例，释放内存
      chartInstance && chartInstance.dispose();
    };
  }, []);

  // 监听窗口大小改变
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // charts事件
  const eventsCharts = (): void => {};

  return (
    <div>
      {title && <h2>{title}</h2>}
      <div style={curStyle} ref={chartRef} />
    </div>
  );
};

export default Chart;
