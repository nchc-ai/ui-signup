import faviconUrl from '../../public/images/common/ai-lab.ico';
import section02Icon01 from '../../public/images/index/section02-icon-01.png';
import section02Icon02 from '../../public/images/index/section02-icon-02.png';
import section02Icon03 from '../../public/images/index/section02-icon-03.png';

import section04Icon01 from '../../public/images/index/section04-icon-01.png';
import section04Icon02 from '../../public/images/index/section04-icon-02.png';
import section04Icon03 from '../../public/images/index/section04-icon-03.png';


export const metaObj = {
  title: 'NCHC.ai Official Website',
  description: 'AI LAB',
  link: {
    rel: {
      icon: faviconUrl
    }
  },
  meta: {
    charset: 'utf-8',
    name: {
      viewport: 'initial-scale=1.0, width=device-width'
    }
  }
};

export const indexPage = {

  section01: {
    info: '財團法人國家實驗研究院國家高速網路與計算中心利用運算主機資源及研發實力，整合出一系列符合產業需求的AI服務，協助產業建置AI系統，進而達成AI產業化產業AI化的目標。',
    highLight: 'AI教育為其中一項服務，以提升產業內人才技術為起點，進而達成協助產業AI技術落地的終極目標。'
  },
  section02: {
    subTitle: '提升人才技術 創造企業新價值',
    thumbs: [
      {
        key: 1,
        title: 'NVIDIA認證國際DLI講師陣容',
        subTitle: '與實務應用結合AI講師群',
        imgUrl: section02Icon01,
        infos: [
          {
            key: 1,
            text: '結合既有專長研究領域, 例如：醫工、3D視覺、平行計算等'
          }, {
            key: 2,
            text: '數十場不同領域的講課經驗'
          }
          
          
        ]
      }, {
        key: 2,
        title: '彈性課程設計符合產業需求',
        subTitle: '搭配課前需求訪談，客製化產業需求課程內容。',
        imgUrl: section02Icon02,
        infos: [
          {
            key: 1,
            text: '基礎學程：以AI 架構的使用規畫課程內容，讓學員能快速使用於實際場域中。'
          }, {
            key: 2,
            text: '進階學程：因應不同場域實際需要，以應用案例作為設計課程內容的主軸。'
          }
        ]
      }, {
        key: 3,
        title: 'Hands-on 課程強調實作環境',
        subTitle: '提供虛擬主機帳號，在公司就能開課。',
        imgUrl: section02Icon03,
        infos: [
          {
            key: 1,
            text: '學員擁有獨立一張GPU做練習，不須與人共享。'
          }, {
            key: 2,
            text: 'Hands-on Lab線上實作介面，結合講師製作的課程講義，學習效果加倍。'
          }
        ]
      }
    ]
  },
  section03: {
    info01: '財團法人國家實驗研究院國家高速網路與計算中心(以下簡稱國網中心)於1991年成立，為全台唯一共有之大型計算平台及學術研究網路設施。為有效支援台灣科技研究，國網中心的研發人員致力於高速計算與大資料庫相關應用的研發技術，範圍涵蓋工程與科學、環境與災防、生物醫學及數位文創等。',
    info02: '2017年起國網中心支援國家前瞻基礎建設計畫，利用既有的研發實力及大型主機建置的實務經驗，為促進AI技術在台灣產業的蓬勃應用，將服務產品化，提供協助AI技術在產業落地的整合性服務產品—AI企業列車。'
  },
  section04: {
    subTitle: '為協助產業建置AI系統架構的服務，包含AI雲端平台、AI教育及AI企業應用服務。以創新的服務流程，從診斷產業對AI的真實需求開始，提供客製化服務內容：',
    thumbs: [
      {
        key: 1,
        title: 'AI雲端平台',
        imgUrl: section04Icon01,
        infos: [
          {
            key: 1,
            text: '協助各型產業在建置AI系統架構時可信賴的基礎設施'
          }
        ]
      }, {
        key: 2,
        title: 'AI教育',
        imgUrl: section04Icon02,
        infos: [
          {
            key: 1,
            text: 'NVIDIA認證國際DLI講師陣容。結合虛擬主機hands-on課程，到廠授課，就地協助建立AI能力'
          }
        ]
      }, {
        key: 3,
        title: 'AI企業應用服務',
        imgUrl: section04Icon03,
        infos: [
          {
            key: 1,
            text: '備完整機器學習功能模組，整合性服務加速產業於AI相關應用的開發'
          }
        ]
      }
    ]
  }
};


export const contactPage = {
  info01: [
    {
      key: 1,
      text: '地址： 30076 新竹市科學園區研發六路7號'
    }, {
      key: 2,
      text: '電話：03-5776085 分機433 高小姐'
    }, {
      key: 3,
      text: '請於上班時間撥打(每週一至週五，09:00~17:00)'
    }
  ],
  info02: [
    {
      key: 1,
      text: '電話：0800-351-510'
    }, {
      key: 2,
      text: '請於下班時間請撥打(每日17:01~08:59及例假日)'
    }, {
      key: 3,
      text: '傳真： 886-3-5776082'
    }
  ]
};


export const selfInfo = {
  name: 'Serena Pan',
  imgUrl: '',
  title: 'Serena Pan',
  info: ''
};
