import Chart from "@/components/Chart";

import wordimg from "@/assets/img/word.jpg";
import word_mask from "@/assets/img/word_mask.jpeg";
import starfield from "@/assets/img/starfield.jpeg";

import "./AlEarth.less";

const AlEarth: React.FC<any> = () => {
  const curOptions = {
    backgroundColor: "#000",
    atmosphere: {
      show: true,
      offset: 0.5,
      color: "rgba(255,255,255,0.2)",
      glowPower: 2,
      innerGlowPower: 1.5,
    },
    globe: {
      globeRadius: 130,
      globeOuterRadius: 140,
      displacementQuality: "high",
      realisticMaterial: {
        roughness: 0.2,
        metalness: 0,
      },

      baseTexture: wordimg,
      heightTexture: word_mask,
      environment: "#000",
      shading: "color",
      light: {
        ambient: {
          intensity: 0.8, //环境光源强度
          color: "#fff",
        }, //环境光
        main: {
          intensity: 0.2, //光源强度
          shadowQuality: "low",
        }, //主光源
      },
      viewControl: {
        alpha: 30,
        autoRotate: false,
        autoRotateAfterStill: 3,
        targetCoord: [98.871541, 1.369626],
        distance: 240,
        autoRotateSpeed: 4,
      },
    },
    series: {
      type: "scatter3D",
      coordinateSystem: "globe",
      blendMode: "source-over",
      showEffectOn: "render",
      zlevel: 8,
      effectType: "ripple",
      symbolSize: 15,
      rippleEffect: {
        period: 4,
        scale: 4,
        brushType: "fill",
      },
      hoverAnimation: true,
      emphasis: {
        scale: true,
      },
      itemStyle: {
        color: "red",
        opacity: 1,
        distance: 1,
      },
      label: {
        distance: 1,
        show: true,
        formatter: function (params: any) {
          console.log(params, "params");
          return params.data[3] + "\n" + params.data[4];
        },
      },
      data: [
        [98.871541, 1.369626, 1, "singapo", "新加坡"],
        [57.95, 58.53, 2, "Uralsk", "乌拉尔"],
        [92.36, 55.96, 3, "Divnogorsk", "季夫诺戈尔斯克"],
        [101.61, 56.13, 4, "Bratsk", "布拉茨克"],
        [-84.51, 36.5, 5, "Oneida", "	伊利诺伊州"],
      ],
    },
  };

  return (
    <div className="al-earth">
      <Chart options={curOptions} />
    </div>
  );
};

export default AlEarth;
