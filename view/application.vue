<template>
  <div>
    <div class="banner">
      <img
        :src="banner"
        alt=""
      />
    </div>
    <div class="midBig">
      <div class="form">
        <div class="menu">
          <el-menu
            :default-active="active"
            active-text-color="#ee3124"
            class="el-menu-vertical-demo"
            @select="handleOpen"
          >
            <el-menu-item index="1">
              <span slot="title">一体化风压变送器</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">主要性能</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">工作原理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">无线变送器的应用</span>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 一体化风压变送器 -->
        <div
          class="content"
          v-show="active == 1"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>一体化风压变送器</div>
          </div>
          <div class="formMain">
            <div class="formDes">● 一体化风压变送器</div>
            <div class="formDes">
              选用美国Honeywell和美国Motorola系列高精度、超低温漂（温度自动补偿）芯片，彩铝合金外壳以及应力隔离技术组装而成，经精密温度补偿、放大处理转换成4～20mA标准信号。
            </div>
            <div class="formDes">● 主要技术参数</div>
            <div class="formDes">
              1、测量范围：差压：0～10Kpa 正压：0～25Kpa
            </div>
            <div class="formDes">
              负压：0～-25paK或者-25～0Kpa 正负压：-25～+25Kpa
            </div>
            <div class="formDes">2、电源：24VDC</div>
            <div class="formDes">3、精度：0.5级</div>
            <div class="formDes">4、输出信号：4～20mA 输出信号：二线制</div>
            <div class="formDes">● KYB一体化风压变送器</div>
            <div class="formDes">
              选用美国Honeywell和美国Motorola系列高精度、超低温漂（温度自动补偿）芯片，采用先进的扩散硅加微机机械加工技术组装而成，经精密温度补偿、放大处理转换成4～20mA标准信号。
            </div>
            <div class="formDes">● 主要技术参数</div>
            <div class="formDes">1、测量范围：0～50Mpa</div>
            <div class="formDes">2、电源：24VDC</div>
            <div class="formDes">3、精度：0.5级</div>
          </div>
        </div>
        <div
          class="content"
          v-show="active == 2"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>主要性能</div>
          </div>
          <div class="formMain">
            <div class="formDes">
              1、使用被测介质广泛，可测油、水及与316不锈钢和304不锈钢兼容的糊状物，具有一定的防腐能力；
            </div>
            <div class="formDes">
              2、高准确度、高稳定性、选用进口原装传感器，线性好，温度稳定性高；
            </div>
            <div class="formDes">3、体积小、重量轻、安装、调试、使用方便；</div>
            <div class="formDes">4、不锈钢全封闭外壳，防水好；</div>
            <div class="formDes">
              5、压力传感器直接感测被测液位压力，不受介质起泡、沉积的影响。
            </div>
          </div>
        </div>
        <div
          class="content"
          v-show="active == 3"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>工作原理</div>
          </div>
          <div class="formMain">
            <div class="formDes">
              当压力直接作用在测量膜片的表面，使膜片产生微小的形变，测量膜片上的高精度电路将这个微小的形变变换成为与压力成正比的高度线性、与激励电压也成正比的电压信号，然后采用专用芯片将这个电压信号转换为工业标准的4-2OmA电流信号或者1-5V电压信号。
            </div>
            <div class="formDes">
              由于测量膜片采用标准话集成电路，内部包含线性及温度补偿电路，所以可以做到高精度和高稳定性，变送电路采用专用的两线制芯片，可以保证输出两线制4-2OmA电流信号，方便现场接线。
            </div>
          </div>
        </div>
        <div
          class="content"
          v-show="active == 4"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>无线变送器的应用</div>
          </div>
          <div class="formMain">
            <div class="formDes">
              <img
                :src="require('@/assets/answer.jpg')"
                alt=""
              />
            </div>
            <div class="formDes">
              随着现代工业的不断发展，工业生产控制也由原来的全靠人工到后来的半自动化，再到现在的自动化控制。尤其是石油炼制和化工等工业中流体或粉体的化学处理的自动化控制。一般都采用检测仪表、调节器和计算机等组成的过程控制系统，对工业生产设备或整个工厂进行最优控制。
            </div>
            <div class="formDes">
              原来的方式将需要参与控制的点位和系统以有线的方式连接起来。但随着自动化控制程度的不断地提高，就要求参与控制的点数更加全面。尤其是在离控制室比较远或安装铺设电缆不便的地方，用有线无法满足需求时，无线变送器因此而诞生了。
            </div>
            <div class="formDes">
              无线变送器，顾名思义就是采用无线的方式不用电缆而将变送器和控制系统联系起来。它主要应用于管道、罐区等野外或供电环境不便的场合，进行压力、流量、温度的监控，实现信号无线传送。
            </div>
            <div class="formDes">
              1、无线变送器在化工、水泥等行业的旋转设备上的应用，如转窑、转炉，以及移动设备需要监测过程参数，以控制工艺性能及产品的品质。
            </div>
            <div class="formDes">
              应用无线技术以前：传统的接线方式很难实现对这些旋转设备的实时监测。这些测点所在的环境也很恶劣，温度高、振动大、容易腐蚀等。采用接触滑环式方式，信号极不稳定，不可靠，误差大，需要大量的维护工作。如果采用非接触式的红外温度监测时，红外探头需要大量的维护和保护，以防水、防尘、防高温，实施起来也很困难。
            </div>
            <div class="formDes">
              应用无线技术以后：通过无线温度变送器，可以很方便、很经济的实现旋转设备的监测。无需外部接线。可配置隔热材料，减少高温对无线变送器的影响。
            </div>
            <div class="formDes">
              优势：获得实时、准确的过程数据；无需电缆和桥架，节约安装成本和调试时间；后期维护方便支持对无线变送器的实时在线诊断和组态。
            </div>
            <div class="formDes">
              2、无线变送器在石油炼化行业：储罐及管道腐蚀状态无线监测
            </div>
            <div class="formDes">
              应用无线技术之前：由监测设备或管道腐蚀状态的专家在停机时，现场人工采集数据并分析数据，只能依靠目测去评估设备及管道腐蚀的程度和风险，
              数据不是实时，而且只能在腐蚀已经发生了才能观测出来，有线方式的成本昂贵，也只局限于有限的腐蚀监测点，检查的位置有限。大型储罐每隔10年或有泄露时停机检查，费用很高。
            </div>
            <div class="formDes">
              应用无线技术之后：应用无线技术把测量腐蚀的探头及无线变送器安装在储罐的四周，实时监测腐蚀状态，并通过控制冲洗阀或药剂加入量，来降低腐蚀程度。系统可以在设备或管道因腐蚀发生重大泄漏之前检测到腐蚀状况。通常造成腐蚀的原因其实与过程流程（如加入的化学药剂过量）相关，因此基于腐蚀数据所提供的信息和分析，用户就可以优化工艺流程、化学药剂使用，及设备维护，来降低设备和管道的腐蚀程度、延长设备和管道的寿命，也可以节省化学药剂的使用量，提高工厂运行效益。不必花费巨额布线成本，根据需要布置腐蚀测量点。
            </div>
            <div class="formDes">
              优势：管理软件平台更可以实时管理储罐腐蚀历史数据，预测储罐使用寿命，支持预防性维护，避免泄露事故。减少开罐检查，延长设备使用寿命，提高效益，节省维护费用通过预防性维护，每个储罐每延长1年无需停机检查的时间就可以节省成本。
            </div>
            <div class="formDes">
              3、无线变送器在管道输送中的应用
            </div>
            <div class="formDes">
              在长达几公里的管线上，没有使用无线变送器，我们将使用大量的安装成本和调试时间，并且有信号衰减、安装困难等恶劣因素。而使用无线变送器在管线上的应用技术后，可以解决信号衰减、安装困难的问题，也节约了大量的安装成本和调试时间,并明显降低后期维护费用,同时确保实时可靠通讯,避免因传统有线方式电缆损坏带来的通讯中断问题。
            </div>
            <div class="formDes">
              综上所述：工业无线技术在工业生产控制中的潜在应用主要是敷设电缆或接线非常困难的测点、分布分散的区域、隔离和屏蔽的区域、检修困难的区域、移动或旋转的设备、电缆容易损坏和折断的场所，以及电缆桥架、卡件、机柜等备用容量用完改造的场合。实施无线技术是在现有有线的控制网络的基础上，进一步延伸测控的广度和深度，从而达到提高工厂安全水平、设备可靠水平、运行自动化水平、以及工作效率的目的。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="midSmall">
      <div class="form">
        <div class="menu">
          <el-menu
            :default-active="active"
            active-text-color="#ee3124"
            class="el-menu-vertical-demo"
            @select="handleOpen"
            mode="horizontal"
          >
            <el-menu-item index="1">
              <span slot="title">一体化风压变送器</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">主要性能</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">工作原理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">无线变送器的应用</span>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 一体化风压变送器 -->
        <div
          class="content"
          v-show="active == 1"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>一体化风压变送器</div>
          </div>
          <div class="formMain">
            <div class="formDes">● 一体化风压变送器</div>
            <div class="formDes">
              选用美国Honeywell和美国Motorola系列高精度、超低温漂（温度自动补偿）芯片，彩铝合金外壳以及应力隔离技术组装而成，经精密温度补偿、放大处理转换成4～20mA标准信号。
            </div>
            <div class="formDes">● 主要技术参数</div>
            <div class="formDes">
              1、测量范围：差压：0～10Kpa 正压：0～25Kpa
            </div>
            <div class="formDes">
              负压：0～-25paK或者-25～0Kpa 正负压：-25～+25Kpa
            </div>
            <div class="formDes">2、电源：24VDC</div>
            <div class="formDes">3、精度：0.5级</div>
            <div class="formDes">4、输出信号：4～20mA 输出信号：二线制</div>
            <div class="formDes">● KYB一体化风压变送器</div>
            <div class="formDes">
              选用美国Honeywell和美国Motorola系列高精度、超低温漂（温度自动补偿）芯片，采用先进的扩散硅加微机机械加工技术组装而成，经精密温度补偿、放大处理转换成4～20mA标准信号。
            </div>
            <div class="formDes">● 主要技术参数</div>
            <div class="formDes">1、测量范围：0～50Mpa</div>
            <div class="formDes">2、电源：24VDC</div>
            <div class="formDes">3、精度：0.5级</div>
          </div>
        </div>
        <div
          class="content"
          v-show="active == 2"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>主要性能</div>
          </div>
          <div class="formMain">
            <div class="formDes">
              1、使用被测介质广泛，可测油、水及与316不锈钢和304不锈钢兼容的糊状物，具有一定的防腐能力；
            </div>
            <div class="formDes">
              2、高准确度、高稳定性、选用进口原装传感器，线性好，温度稳定性高；
            </div>
            <div class="formDes">3、体积小、重量轻、安装、调试、使用方便；</div>
            <div class="formDes">4、不锈钢全封闭外壳，防水好；</div>
            <div class="formDes">
              5、压力传感器直接感测被测液位压力，不受介质起泡、沉积的影响。
            </div>
          </div>
        </div>
        <div
          class="content"
          v-show="active == 3"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>工作原理</div>
          </div>
          <div class="formMain">
            <div class="formDes">
              当压力直接作用在测量膜片的表面，使膜片产生微小的形变，测量膜片上的高精度电路将这个微小的形变变换成为与压力成正比的高度线性、与激励电压也成正比的电压信号，然后采用专用芯片将这个电压信号转换为工业标准的4-2OmA电流信号或者1-5V电压信号。
            </div>
            <div class="formDes">
              由于测量膜片采用标准话集成电路，内部包含线性及温度补偿电路，所以可以做到高精度和高稳定性，变送电路采用专用的两线制芯片，可以保证输出两线制4-2OmA电流信号，方便现场接线。
            </div>
          </div>
        </div>
        <div
          class="content"
          v-show="active == 4"
        >
          <div class="formTitle">
            <div class="line"></div>
            <div>无线变送器的应用</div>
          </div>
          <div class="formMain">
            <div class="formDes">
              <img
                :src="require('@/assets/answer.jpg')"
                alt=""
              />
            </div>
            <div class="formDes">
              随着现代工业的不断发展，工业生产控制也由原来的全靠人工到后来的半自动化，再到现在的自动化控制。尤其是石油炼制和化工等工业中流体或粉体的化学处理的自动化控制。一般都采用检测仪表、调节器和计算机等组成的过程控制系统，对工业生产设备或整个工厂进行最优控制。
            </div>
            <div class="formDes">
              原来的方式将需要参与控制的点位和系统以有线的方式连接起来。但随着自动化控制程度的不断地提高，就要求参与控制的点数更加全面。尤其是在离控制室比较远或安装铺设电缆不便的地方，用有线无法满足需求时，无线变送器因此而诞生了。
            </div>
            <div class="formDes">
              无线变送器，顾名思义就是采用无线的方式不用电缆而将变送器和控制系统联系起来。它主要应用于管道、罐区等野外或供电环境不便的场合，进行压力、流量、温度的监控，实现信号无线传送。
            </div>
            <div class="formDes">
              1、无线变送器在化工、水泥等行业的旋转设备上的应用，如转窑、转炉，以及移动设备需要监测过程参数，以控制工艺性能及产品的品质。
            </div>
            <div class="formDes">
              应用无线技术以前：传统的接线方式很难实现对这些旋转设备的实时监测。这些测点所在的环境也很恶劣，温度高、振动大、容易腐蚀等。采用接触滑环式方式，信号极不稳定，不可靠，误差大，需要大量的维护工作。如果采用非接触式的红外温度监测时，红外探头需要大量的维护和保护，以防水、防尘、防高温，实施起来也很困难。
            </div>
            <div class="formDes">
              应用无线技术以后：通过无线温度变送器，可以很方便、很经济的实现旋转设备的监测。无需外部接线。可配置隔热材料，减少高温对无线变送器的影响。
            </div>
            <div class="formDes">
              优势：获得实时、准确的过程数据；无需电缆和桥架，节约安装成本和调试时间；后期维护方便支持对无线变送器的实时在线诊断和组态。
            </div>
            <div class="formDes">
              2、无线变送器在石油炼化行业：储罐及管道腐蚀状态无线监测
            </div>
            <div class="formDes">
              应用无线技术之前：由监测设备或管道腐蚀状态的专家在停机时，现场人工采集数据并分析数据，只能依靠目测去评估设备及管道腐蚀的程度和风险，
              数据不是实时，而且只能在腐蚀已经发生了才能观测出来，有线方式的成本昂贵，也只局限于有限的腐蚀监测点，检查的位置有限。大型储罐每隔10年或有泄露时停机检查，费用很高。
            </div>
            <div class="formDes">
              应用无线技术之后：应用无线技术把测量腐蚀的探头及无线变送器安装在储罐的四周，实时监测腐蚀状态，并通过控制冲洗阀或药剂加入量，来降低腐蚀程度。系统可以在设备或管道因腐蚀发生重大泄漏之前检测到腐蚀状况。通常造成腐蚀的原因其实与过程流程（如加入的化学药剂过量）相关，因此基于腐蚀数据所提供的信息和分析，用户就可以优化工艺流程、化学药剂使用，及设备维护，来降低设备和管道的腐蚀程度、延长设备和管道的寿命，也可以节省化学药剂的使用量，提高工厂运行效益。不必花费巨额布线成本，根据需要布置腐蚀测量点。
            </div>
            <div class="formDes">
              优势：管理软件平台更可以实时管理储罐腐蚀历史数据，预测储罐使用寿命，支持预防性维护，避免泄露事故。减少开罐检查，延长设备使用寿命，提高效益，节省维护费用通过预防性维护，每个储罐每延长1年无需停机检查的时间就可以节省成本。
            </div>
            <div class="formDes">
              3、无线变送器在管道输送中的应用
            </div>
            <div class="formDes">
              在长达几公里的管线上，没有使用无线变送器，我们将使用大量的安装成本和调试时间，并且有信号衰减、安装困难等恶劣因素。而使用无线变送器在管线上的应用技术后，可以解决信号衰减、安装困难的问题，也节约了大量的安装成本和调试时间,并明显降低后期维护费用,同时确保实时可靠通讯,避免因传统有线方式电缆损坏带来的通讯中断问题。
            </div>
            <div class="formDes">
              综上所述：工业无线技术在工业生产控制中的潜在应用主要是敷设电缆或接线非常困难的测点、分布分散的区域、隔离和屏蔽的区域、检修困难的区域、移动或旋转的设备、电缆容易损坏和折断的场所，以及电缆桥架、卡件、机柜等备用容量用完改造的场合。实施无线技术是在现有有线的控制网络的基础上，进一步延伸测控的广度和深度，从而达到提高工厂安全水平、设备可靠水平、运行自动化水平、以及工作效率的目的。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner_url from "@/assets/homePage/banner.png";
import { WOW } from "wowjs";
export default {
  name: "invite",
  data() {
    return {
      banner: banner_url,
      active: "1",
      form: {
        content: "",
        qq: "",
        email: "",
      },
    };
  },
  mounted() {
    //new WOW().init();  直接引用，默认配置，如果需要修改配置用下面的一段代码
    let wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
  },
  methods: {
    handleOpen(e) {
      this.active = e;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.banner {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
  }
}
.midSmall {
  display: none;
}
.midBig {
  width: 90%;
  margin: auto;
  margin-top: 300px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .title {
    margin-top: 400px;
    margin-bottom: 50px;
    font-size: 48px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
  }
  .des {
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
  }
  .form {
    overflow: hidden;
    margin-top: 500px;
    width: 100%;
    background: rgba(255, 255, 251, 1);
    box-shadow: 0px 0px 16px 0px rgba(7, 20, 20, 0.42);
    border-radius: 8px;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .menu {
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 20px;
      .el-menu {
        width: 80%;
      }
    }
    .content {
      flex: 1;
      min-height: 500px;
      .formTitle {
        width: 1200px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        font-size: 40px;
        margin: 20px auto;
        .line {
          width: 10px;
          height: 100%;
          background-color: #ee3124;
          margin-right: 20px;
        }
      }
      .formMain {
        width: 1200px;
        height: 100%;
        margin: auto;
      }
      .formDes {
        text-indent: 36px;
        margin-top: 20px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(101, 101, 101, 1);
        line-height: 32px;
      }
      .formContentTitle {
        margin-top: 15px;
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(40, 40, 40, 1);
        line-height: 32px;
      }
      .input {
        margin-top: 10px;
      }
      .submit {
        margin: 100px auto;
        text-align: center;
        width: 411px;
        height: 110px;
        line-height: 110px;
        background: rgba(255, 234, 91, 1);
        font-size: 28px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(114, 147, 255, 1);
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .midBig {
    display: none;
  }
  .midSmall {
    display: block;
    width: 90%;
    min-height: 500px;
    margin: auto;
    margin-top: 300px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .el-menu-vertical-demo{
      .el-menu-item{
        padding: 0 10px
      }
    }
    .content{
      padding: 20px;
      min-height: 600px;
      img{
        width: 100%;
      }
    }
  }
}
</style>
