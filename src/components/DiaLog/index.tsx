import Chart from "@/components/Chart";

interface ShowDiaLogProps {
  visable: boolean;
}

const options = {
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

const ShowDiaLog: React.FC<ShowDiaLogProps> = (props) => {
  const { visable } = props;

  return <div> {visable && <Chart options={options} />}</div>;
};

export default ShowDiaLog;
