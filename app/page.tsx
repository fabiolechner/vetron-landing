'use client'

import { useEffect, useState } from 'react'
import { Newsreader } from 'next/font/google'
import Link from 'next/link'
import styles from './vetron.module.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
  axes: ['opsz'],
})

const AUSTRIA_PATH = "M109.937210,273.113190 C114.332123,272.839661 118.314537,266.669281 117.765663,261.498962 C117.519554,259.180725 118.026360,256.782532 119.027527,253.997086 C123.587273,259.074280 128.911636,258.298981 134.173340,258.207703 C135.823593,258.179077 138.349411,258.732910 139.008438,259.869904 C142.313080,265.571350 147.503159,265.484131 152.894150,265.091919 C157.383316,264.765289 162.526581,265.777466 164.476089,259.789948 C164.593597,259.429047 165.251602,259.201111 165.697205,258.996521 C174.149780,255.115891 181.799927,249.013336 191.851395,249.553085 C195.172623,249.731430 198.161240,249.378479 199.175385,245.367401 C199.312775,244.824036 200.330246,244.379700 201.026474,244.138733 C201.623856,243.931992 202.356293,243.997482 203.009125,244.087173 C209.671478,245.002289 216.372971,245.729675 222.958374,247.038498 C224.574463,247.359695 226.285416,249.364624 227.123535,251.016235 C229.265915,255.238068 230.345352,260.200897 236.056000,261.396698 C236.712219,259.028564 237.791519,256.694763 237.854050,254.334000 C237.892792,252.871902 236.646301,251.107941 235.495316,249.963791 C234.510391,248.984711 232.546677,249.001556 231.536392,248.034256 C229.643860,246.222198 226.844666,244.047256 226.795242,241.966873 C226.739243,239.610779 229.289322,237.192734 231.324570,233.758240 C230.800293,233.140366 229.615005,231.260330 227.989319,229.910812 C220.774124,223.921249 222.876694,213.148926 231.940735,210.478653 C233.408157,210.046341 234.505142,208.481766 235.911469,207.683990 C237.538498,206.761002 239.278687,205.558319 241.038559,205.431458 C248.726242,204.877167 252.121597,202.000854 253.276657,194.440018 C253.476425,193.132401 253.706635,191.805771 253.683548,190.492111 C253.604965,186.022049 255.795807,184.942657 259.724915,186.263687 C260.813110,186.629562 261.911133,186.966141 263.005341,187.314117 C267.509918,188.746613 269.427277,187.722610 268.444824,183.176895 C266.938751,176.208405 272.272552,176.114243 275.132874,174.277847 C277.739777,176.105469 279.887604,177.398804 281.769043,179.004288 C283.042572,180.091034 284.780273,181.569763 284.858032,182.954681 C285.145355,188.074326 288.676880,189.884689 292.526154,189.620941 C299.036377,189.174866 305.496124,187.708313 311.904755,186.333588 C313.016754,186.095062 313.826874,184.233414 314.680756,183.052277 C316.424530,180.640137 317.581635,177.146271 319.922272,175.966370 C324.188446,173.815796 325.201904,170.156693 326.081543,166.422791 C327.529907,160.274567 330.143890,158.911041 336.024963,161.621094 C339.602905,163.269836 343.278534,164.796310 347.049347,165.904419 C349.478943,166.618393 352.189209,166.314514 354.720459,166.765457 C356.713715,167.120590 358.649536,167.867462 360.561707,168.573517 C361.296875,168.844955 361.985352,169.981216 362.543274,169.880692 C368.398743,168.825836 371.477600,172.698837 375.064423,176.239258 C378.049744,179.185974 388.566345,179.145554 392.389374,176.827393 C397.227600,173.893616 401.423431,174.261978 405.854431,177.759781 C407.108917,178.750031 408.874756,180.079132 410.169098,179.859070 C415.393433,178.970871 417.194305,182.584427 418.767151,186.105133 C420.381104,189.717834 420.045410,193.241699 417.530975,196.794739 C414.362732,201.271683 417.111633,212.292572 421.688599,215.785065 C423.243835,216.971832 424.678864,218.321472 426.125854,219.643707 C431.290649,224.363113 429.563446,229.945526 428.025757,235.469971 C427.818451,236.214706 427.302948,237.429901 426.851013,237.467133 C419.767517,238.050858 423.595398,242.233292 424.349640,245.181580 C425.542725,249.845627 424.013428,252.529083 419.321075,252.319016 C414.081207,252.084427 408.391602,254.265244 403.677643,249.532684 C403.000275,248.852600 399.587616,250.897018 397.663422,252.231369 C405.441589,255.545883 411.337677,260.656982 403.943176,270.030212 C403.155212,271.029022 402.038116,272.329559 400.962952,272.443390 C396.268524,272.940216 396.018280,274.672821 398.229645,278.498566 C399.126373,280.049957 398.149139,282.684509 397.947388,286.153992 C402.312775,291.542236 399.859985,298.352356 391.921692,300.989716 C388.511169,302.122833 385.919128,305.755524 382.997284,308.300903 C382.150177,309.038849 381.518982,310.572388 380.668945,310.667236 C376.286987,311.156281 375.844971,313.324219 376.731720,317.203400 C377.661255,321.269928 375.933441,322.630188 372.179382,320.905121 C368.928070,319.411041 366.193329,319.011871 362.933014,320.868591 C361.339539,321.776062 359.067139,321.432526 357.140747,321.838715 C356.146393,322.048370 354.953033,322.417084 354.341095,323.133667 C352.394531,325.413147 350.912964,329.629211 348.822571,329.910736 C345.027924,330.421814 340.505524,329.426483 337.060760,327.600189 C333.202576,325.554749 330.436462,325.201996 327.331482,328.321014 C326.422943,329.233704 325.161560,330.372955 324.040283,330.396881 C319.002502,330.504425 315.936737,333.631683 312.873199,336.958527 C310.072876,339.999542 307.166779,342.540192 302.818054,339.161987 C302.050415,338.565643 300.554443,338.796295 299.399841,338.828125 C294.732300,338.956665 290.587036,337.833527 286.130890,336.009308 C280.162140,333.565796 273.338013,333.214386 266.882874,331.955750 C251.117508,328.881744 235.395676,325.555664 219.570190,322.831238 C211.829926,321.498718 207.615677,316.395691 203.478928,310.667084 C202.100586,308.758301 200.326157,307.034607 198.440872,305.613617 C194.357239,302.535583 193.998810,299.461823 197.176590,293.628235 C195.161636,294.290466 193.176605,295.070618 191.125656,295.591156 C186.447845,296.778412 181.770706,298.012421 177.033188,298.910400 C169.469833,300.344055 161.834320,301.399292 154.276474,302.858734 C150.788223,303.532318 150.216537,306.486420 150.565750,309.447845 C151.246628,315.221832 146.939743,316.543427 143.008102,317.593414 C137.022186,319.192047 133.118835,317.567749 131.401413,313.266724 C130.166855,310.174927 128.948807,308.294220 125.227684,310.515900 C123.636795,311.465729 121.110092,311.988739 119.513527,311.380432 C118.479385,310.986450 118.244987,308.217865 117.871811,306.466492 C117.643120,305.393188 117.829529,304.231384 117.829529,301.437469 C113.814644,303.995300 110.607063,305.636047 107.881691,307.866119 C103.401428,311.532166 97.644989,310.545807 94.489075,305.043274 C92.626587,301.795929 91.392586,298.645996 86.549309,298.173645 C83.382309,297.864777 80.267448,295.254395 77.481491,293.197693 C72.673882,289.648560 72.114021,285.486206 73.937721,279.354736 C75.240364,274.975098 75.688118,270.308563 76.188972,265.734070 C76.550240,262.434418 86.361595,253.111725 88.429634,254.867004 C93.076126,258.810822 101.426262,257.273193 103.298843,265.032013 C103.523003,265.960785 104.146317,266.793243 104.440933,267.382843 C106.617485,267.049316 108.596260,266.746124 110.575043,266.442932 C110.643654,267.953094 110.712273,269.463226 110.531326,271.396942 C110.166908,272.251404 110.052055,272.682281 109.937210,273.113190 z"

function VetronLogo({ height = 22 }: { height?: number }) {
  const width = Math.round(height * (900 / 277))
  return (
    <svg width={width} height={height} viewBox="0 0 900 277" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', flexShrink: 0 }}>
      <g fill="#15243f">
        <path d="M131.8 205.9 c-2.9 -1.6 -2.1 -2.9 1.7 -2.9 2.8 0 3.5 0.4 3.5 2 0 2.2 -2.4 2.6 -5.2 0.9z"/>
        <path d="M297.5 176.3 c-2.7 -7.1 -7.2 -19.1 -10.2 -26.8 -2.9 -7.7 -6.7 -17.6 -8.4 -22 -8.3 -22.1 -12.2 -28.5 -17 -28.5 -1 0 -2.1 -0.5 -2.4 -1 -0.4 -0.7 6.1 -1 18.7 -0.9 14.1 0 18.6 0.3 16.8 1.1 -7.2 2.9 -7.5 3.2 -7.8 7.9 -0.2 3.7 1.6 10 9.8 33 5.6 15.6 10.3 29 10.6 29.8 1 2.9 1.4 2 12.9 -27.9 9.8 -25.6 11.5 -32.3 9.6 -37.3 -0.6 -1.5 -2.1 -3.1 -3.3 -3.6 -7.6 -2.9 -7.5 -3 7.5 -3 8.1 -0.1 14.7 0.3 14.7 0.7 0 0.4 -1.5 1.3 -3.3 2 -6.9 2.5 -9.6 7.2 -21.4 37.2 -18.4 46.8 -20.5 52 -21.2 52 -0.5 0 -3 -5.7 -5.6 -12.7z"/>
        <path d="M668.5 188.4 c-12.9 -2.7 -20.6 -6.7 -28 -14.5 -12.8 -13.4 -16 -33.3 -8.1 -50.3 7.6 -16.3 22 -26.4 40.2 -28.1 18.1 -1.7 37.4 8.1 45.7 23.4 3.2 5.8 5.7 15.8 5.7 22.6 0 12.3 -6.4 27.1 -15 34.7 -10.3 9.2 -28.5 14.6 -40.5 12.2z m17 -3.1 c10.1 -3.4 19.2 -16.3 21.5 -30.4 2.3 -14.3 0.5 -30.1 -4.5 -40.2 -11.5 -23.1 -40.3 -23.7 -52.2 -1 -8.8 16.8 -8.4 42.9 1 58.2 3.7 6 10.9 12.2 16.1 13.9 4.9 1.6 12.8 1.4 18.1 -0.5z"/>
        <path d="M784 148.6 c-17.3 -21.7 -32.1 -39.5 -32.7 -39.5 -2 -0.1 -1.8 55 0.2 64.3 1.6 7.6 2.7 9.3 7 11.2 2.7 1.2 1.8 1.3 -9 1.3 -11.9 0.1 -12 0 -8.6 -1.6 2.3 -1.2 4 -3.1 5.5 -6.2 1.8 -4.2 2.1 -6.9 2.4 -30.6 0.4 -28.5 -0.6 -40.3 -3.6 -44.4 -1 -1.4 -3.9 -3.4 -6.3 -4.3 l-4.4 -1.7 12.6 0 12.6 -0.1 10.9 13.7 c6 7.6 13.1 16.4 15.8 19.8 2.6 3.3 9.8 12.2 15.9 19.7 6 7.6 11.3 13.5 11.7 13.3 0.4 -0.2 0.8 -10 0.9 -21.8 0.2 -22 -0.8 -32.9 -3.7 -37.9 -1.5 -2.5 -2.4 -3.2 -8.2 -5.6 -1.9 -0.8 1.1 -1.1 12.5 -1.1 11.1 0 14.4 0.3 12.5 1.1 -6 2.4 -7.4 3.5 -9.4 7.3 -2 3.8 -2.1 5.9 -2.6 43.3 l-0.5 39.3 -31.5 -39.5z"/>
        <path d="M360.5 186 c-3.3 -0.5 -3.6 -0.7 -1.8 -1.3 4 -1.4 5.4 -5.2 6.3 -17.5 2 -25 0.5 -59.9 -2.6 -64.7 -1 -1.5 -3.5 -3.1 -6.3 -3.9 -4.2 -1.3 -1.5 -1.5 30 -1.5 l34.6 -0.1 0.7 6.1 c0.3 3.4 0.6 8.3 0.6 10.8 l-0.1 4.6 -2.8 -6.2 c-4.8 -10.3 -11.8 -13.3 -30.7 -13.3 l-9.4 0 0 19.6 0 19.7 6.9 -0.6 c3.9 -0.3 7.9 -1.1 9.1 -1.7 2.9 -1.5 6 -6.9 6 -10.2 0 -1.6 0.5 -2.8 1 -2.8 0.6 0 1 6.3 1 17 0 16 -1.1 22 -2.3 13 -1.1 -8.1 -5.5 -11.6 -15.8 -12.7 l-6.1 -0.6 0.4 18.4 c0.4 24.2 1.3 25.6 15.5 26.6 9.6 0.7 19.2 -1.5 24.3 -5.5 3.8 -3 9 -12.2 9 -15.8 0 -1.3 0.3 -2.5 0.8 -2.7 0.4 -0.3 0.5 5.3 0.2 12.4 l-0.5 12.9 -32 0.3 c-17.6 0.1 -33.8 0 -36 -0.3z"/>
        <path d="M468.7 186.2 l-2.8 -0.3 3.2 -2.2 c1.8 -1.2 3.7 -3.5 4.2 -5.2 0.6 -1.6 1.2 -20.3 1.4 -41.4 l0.5 -38.4 -9.6 0.6 c-15.2 0.9 -20.8 4.6 -24.8 16.6 l-1.9 5.6 0.6 -7.9 c0.3 -4.3 0.5 -9.9 0.5 -12.3 l0 -4.3 41.4 0 41.3 0 0.6 6.8 c0.4 3.7 0.7 9.2 0.6 12.2 l0 5.5 -1.3 -4.7 c-3.3 -12.2 -10.2 -16.9 -24.9 -17.2 l-9.2 -0.1 0 38 c0 36 0.1 38.2 2 42 1.5 3.1 3 4.3 6.4 5.6 4.3 1.5 4.2 1.6 -10.5 1.5 -8.2 -0.1 -16.2 -0.2 -17.7 -0.4z"/>
        <path d="M537.3 185.7 c4.6 -1.1 7.8 -4.6 8.8 -9.9 1.1 -5.6 1.1 -62 0 -67.7 -1 -5.1 -3.7 -8.1 -8.9 -9.8 -3.1 -1 0.5 -1.2 21.3 -0.9 28.7 0.4 33.4 1.3 39.6 7.5 6.9 6.9 7.5 20.7 1.2 28.2 -2.6 3.1 -9.1 6.9 -11.7 6.9 -3 0 -2.5 1.9 0.9 3.6 4.9 2.3 7.8 6.1 14 18.3 6.6 13.3 12.7 20.3 19.8 22.9 l5.2 2 -13 -0.5 c-10.7 -0.3 -13.2 -0.7 -14.3 -2.1 -0.8 -0.9 -4.5 -8.1 -8.4 -15.9 -11.1 -22.7 -13.8 -25.3 -25.8 -25.3 l-6 0 0 9.3 c0 13.3 1.6 26.1 3.5 29.1 0.9 1.4 3.5 3.1 5.8 3.9 3.9 1.3 2.6 1.4 -15.6 1.3 -12.7 -0.1 -18.6 -0.4 -16.4 -0.9z m39.3 -46.2 c8.5 -2.5 12.5 -8.3 12.6 -18 0.1 -15.4 -5.9 -21.7 -20.7 -21.9 l-8 -0.1 -0.3 20.8 -0.2 20.7 5.8 0 c3.2 0 8.1 -0.7 10.8 -1.5z"/>
        <path d="M112.8 123.3 c-3.3 -0.8 -2 -3.3 1.7 -3.3 2.8 0 3.5 0.4 3.5 2 0 2 -1.4 2.3 -5.2 1.3z"/>
      </g>
      <g fill="#1f3258">
        <path d="M131.3 205.5 c-4.2 -1.8 -4.2 -3.5 -0.2 -3.5 2.9 0 3 -0.1 2.4 -3.2 -0.4 -1.8 -1.3 -4.3 -2.1 -5.5 -0.8 -1.2 -1.4 -3.5 -1.4 -5.2 0 -1.6 -0.6 -3.1 -1.5 -3.5 -0.8 -0.3 -1.5 -1.5 -1.5 -2.6 0 -1.6 -0.6 -2 -3.5 -2 -1.9 0 -3.5 -0.4 -3.5 -1 0 -0.5 -1.1 -1 -2.5 -1 -1.8 0 -2.5 -0.5 -2.5 -2 0 -1.1 -0.6 -2 -1.4 -2 -0.8 0 -1.7 -1 -1.9 -2.2 -0.3 -1.7 -0.5 -1.4 -0.6 1 -0.1 3 -0.3 3.2 -3.8 3.2 -3.7 0 -3.7 0 -1.5 1.6 1.5 1 2.2 2.5 2.2 4.9 0 3.1 0.3 3.4 3.3 3.7 3 0.3 3.2 0.6 3.5 4.3 l0.2 4 -6 -6.5 c-12.4 -13.3 -23.9 -30.2 -35.5 -52.3 -10.7 -20.3 -21.5 -47.9 -21.5 -54.8 0 -3.9 3.2 -6.9 7.4 -6.9 9.1 0 27.6 13.9 37.2 28.1 4.4 6.3 4.7 7.2 3.1 8 -0.9 0.6 -2.4 2.4 -3.3 4.1 -2.3 4.5 -0.5 8.1 5.4 10.6 2.6 1.1 5.6 2.2 6.7 2.4 1.5 0.2 3.3 3.7 7.6 14.8 3.2 8 6.2 15.6 6.8 17 1.2 2.9 14.5 37.6 15.4 40.3 1.1 3 3.1 1.9 4.8 -2.6 20 -52.5 27.2 -69.7 29.2 -69.7 2.3 0 8.5 -2.7 11 -4.8 1 -1 1.7 -2.9 1.7 -5.3 0 -3.1 -0.5 -4.1 -2.9 -5.5 -2.8 -1.6 -2.9 -1.9 -1.6 -4.3 2.3 -4.5 11.4 -15.2 17 -20.2 16.1 -14.1 30.7 -16.8 30.7 -5.8 0 3.7 -3.4 15.3 -7.5 25.4 -10.2 25.2 -26.2 53.5 -41.2 72.6 -6.8 8.7 -20.5 21.1 -27.2 24.7 -6.9 3.7 -9.3 4 -9.3 1.3 0 -1.4 -0.6 -1.7 -2.5 -1.3 -1.4 0.2 -2.5 1.1 -2.5 1.8 0 1.8 -2.6 1.7 -6.7 -0.1z m28.7 -14.5 c-1.5 -0.9 -0.4 -14 1.1 -14 0.5 0 0.9 -0.7 0.9 -1.5 0 -0.8 -0.9 -1.5 -1.9 -1.5 -1.1 0 -2.1 -0.6 -2.4 -1.2 -0.2 -0.7 -0.8 -0.1 -1.2 1.5 -0.4 1.5 -1.1 2.7 -1.5 2.7 -0.4 0 -1 1.2 -1.2 2.8 -0.3 1.5 -1.1 4.8 -1.9 7.4 -1.2 4.5 -1.2 4.8 1 6.7 l2.4 2.1 2.9 -2.2 c2.1 -1.4 2.6 -2.3 1.8 -2.8z m-57 -17.5 c0 -0.8 -0.4 -1.5 -1 -1.5 -0.5 0 -1 0.7 -1 1.5 0 0.8 0.5 1.5 1 1.5 0.6 0 1 -0.7 1 -1.5z"/>
        <path d="M121.3 199.5 l-2.8 -2.4 3.8 -0.1 c3.3 0 3.7 0.3 3.7 2.5 0 3.1 -1.1 3.2 -4.7 0z"/>
        <path d="M137.9 156.3 c-0.6 -1.5 -1.9 -5.5 -2.9 -8.8 -4 -14 -10.5 -21.1 -22.4 -24.6 -9.1 -2.7 -12.7 -4.6 -12 -6.2 0.3 -0.8 4 -2.4 8.3 -3.7 8.2 -2.4 17 -7.7 20.5 -12.3 1.1 -1.5 3.6 -7.6 5.6 -13.5 4.8 -14.5 6 -14.5 10.6 -0.1 5.1 15.9 11.6 22.1 27.7 26.4 5.1 1.4 7.9 3.6 6.4 5.1 -0.2 0.3 -4.5 1.9 -9.3 3.6 -15.9 5.6 -19.5 9.4 -24.9 26 -3.5 11.1 -5.6 13.3 -7.6 8.1z"/>
      </g>
    </svg>
  )
}

export default function VetronPage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ firma: '', name: '', email: '', telefon: '', nachricht: '' })

  const openModal = () => { setShowModal(true); setMenuOpen(false); setFormState('idle') }
  const closeModal = () => setShowModal(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showModal])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('reveal-active'); io.unobserve(en.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))
    setTimeout(() => {
      document.querySelectorAll('[data-hero]').forEach(el => el.classList.add('reveal-active'))
    }, 100)
    return () => io.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, product: 'Vetron' }),
      })
      if (res.ok) { setFormState('success'); setFormData({ firma: '', name: '', email: '', telefon: '', nachricht: '' }) }
      else setFormState('error')
    } catch { setFormState('error') }
  }

  return (
    <div className={`${newsreader.variable} ${styles.root}`}>

      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`} id="nav">
        <div className={styles.container}>
          <a href="#top" className={styles.navLogo} aria-label="Vetron">
            <VetronLogo height={22} />
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#produkte">Produkte</a></li>
            <li><a href="#gedanke">Ansatz</a></li>
            <li><a href="#warum">Unternehmen</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
          <button className={styles.navCta} onClick={openModal}>Kontakt aufnehmen</button>
          <button className={styles.navBurger} aria-label="Menü" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 7h16M3 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className={styles.navMobile}>
          <a href="#produkte" onClick={() => setMenuOpen(false)}>Produkte</a>
          <a href="#gedanke" onClick={() => setMenuOpen(false)}>Ansatz</a>
          <a href="#warum" onClick={() => setMenuOpen(false)}>Unternehmen</a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
          <button className={styles.navCta} onClick={openModal}>Kontakt aufnehmen</button>
        </div>
      )}

      {/* HERO */}
      <section className={styles.hero} id="top">
        <div className={styles.heroBg}></div>
        <div className={styles.container}>
          <p className={`${styles.eyebrow} ${styles.heroEyebrow} ${styles.reveal}`} data-reveal="" data-hero="">
            Software für produzierende Betriebe
          </p>
          <h1 className={`${styles.display} ${styles.reveal}`} data-reveal="" data-hero="" data-delay="1">
            Think <em>Deeper</em><span className={styles.dot}>.</span>
          </h1>
          <p className={`${styles.lede} ${styles.heroSub} ${styles.reveal}`} data-reveal="" data-hero="" data-delay="2">
            Vetron automatisiert die Busy&nbsp;Work mit KI — und gibt Ihren Teams die Zeit
            zurück für das, was Maschinen nicht können: tiefes, konzentriertes Denken.
          </p>
          <div className={`${styles.heroActions} ${styles.reveal}`} data-reveal="" data-hero="" data-delay="3">
            <a href="#produkte" className={`${styles.btn} ${styles.btnPrimary}`}>Lösungen entdecken</a>
            <a href="#gedanke" className={styles.linkArrow}>Der Vetron-Gedanke
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.heroScrollLine}></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* GEDANKE */}
      <section className={`${styles.pad} ${styles.bgMist} ${styles.manifest}`} id="gedanke">
        <div className={styles.container}>
          <span className={`${styles.eyebrow} ${styles.reveal}`} data-reveal="">Der Vetron-Gedanke</span>
          <h2 className={`${styles.display} ${styles.reveal}`} data-reveal="" data-delay="1">
            Routine kostet keine Zeit.<br />Sie kostet <em>Tiefe.</em>
          </h2>
          <p className={styles.reveal} data-reveal="" data-delay="2">
            Jede Stunde, die mit manueller Nachverfolgung, Copy-&amp;-Paste und Formularen verloren geht,
            fehlt an anderer Stelle — bei den Entscheidungen, die einen Betrieb wirklich voranbringen.
            Wir verschieben diese Arbeit dorthin, wo sie hingehört: zur Maschine.
          </p>

          <div className={`${styles.split} ${styles.reveal}`} data-reveal="" data-delay="2">
            <div className={`${styles.splitCol} ${styles.splitColBefore}`}>
              <div className={styles.label}>Was wir wegnehmen</div>
              <ul>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="#8a8a8f" strokeWidth="1.6" strokeLinecap="round"/></svg></span>Lieferanten manuell nachfassen</li>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="#8a8a8f" strokeWidth="1.6" strokeLinecap="round"/></svg></span>Dokumente sortieren &amp; ablegen</li>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="#8a8a8f" strokeWidth="1.6" strokeLinecap="round"/></svg></span>Angebote aus Mails abtippen</li>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8h8" stroke="#8a8a8f" strokeWidth="1.6" strokeLinecap="round"/></svg></span>Status hinterherrecherchieren</li>
              </ul>
            </div>
            <div className={styles.splitArrow}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11h13M12 6l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className={`${styles.splitCol} ${styles.splitColAfter}`}>
              <div className={styles.label}>Was dadurch entsteht</div>
              <ul>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#1f5132" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Raum für strategische Arbeit</li>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#1f5132" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Schnellere, fundierte Entscheidungen</li>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#1f5132" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Weniger Fehler, mehr Übersicht</li>
                <li><span className={styles.tick}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#1f5132" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Teams, die wieder denken</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUKTE */}
      <section className={styles.pad} id="produkte">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.reveal}`} data-reveal="">
            <span className={styles.eyebrow}>Produktportfolio</span>
            <h2 className={styles.display}>Präzise Lösungen<br /><em>für jeden Betrieb.</em></h2>
          </div>

          <div className={styles.bento}>
            {/* ComplianceFlow (Feature) */}
            <div className={`${styles.card} ${styles.cardFeature} ${styles.reveal}`} data-reveal="">
              <div className={styles.cardNum}>01</div>
              <div className={`${styles.badge} ${styles.badgeLive}`}><span className={styles.badgeDot}></span>Live verfügbar</div>
              <img src="/CF-Logo-Mai.svg" style={{height:'48px',width:'auto',display:'block',marginBottom:'8px'}} alt="ComplianceFlow" />
              <div className={styles.cardCat}>CE-Dokumentation &amp; Compliance</div>
              <p className={styles.cardDesc}>
                Automatisierte CE-Erklärungen und Sicherheitsdatenblätter von Lieferanten —
                wöchentlicher Zyklus, KI-kategorisiert, ohne manuelle Nachverfolgung.
              </p>
              <div className={styles.cardFoot}>
                <Link href="/complianceflow" className={styles.linkArrow}>Produkt ansehen
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className={`${styles.card} ${styles.cardEnt} ${styles.reveal}`} data-reveal="" data-delay="1">
              <div className={styles.cardNum}>—</div>
              <div className={styles.cardName}>Enterprise</div>
              <div className={styles.cardCat}>Individuallösungen</div>
              <p className={styles.cardDesc}>
                Maßgeschneiderte Entwicklung auf Basis der Vetron-Plattform
                für spezifische Betriebsanforderungen.
              </p>
              <div className={styles.cardFoot}>
                <button className={styles.linkArrow} onClick={openModal}>Gespräch anfragen
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            {/* QuotePilot */}
            <div className={`${styles.card} ${styles.cardDim} ${styles.reveal}`} data-reveal="">
              <div className={styles.cardNum}>02</div>
              <div className={`${styles.badge} ${styles.badgeSoon}`}>In Entwicklung</div>
              <div className={styles.cardName}>Quote<em>Pilot</em></div>
              <div className={styles.cardCat}>KI-Angebotserstellung</div>
              <p className={styles.cardDesc}>
                E-Mail rein, Angebot raus — die KI extrahiert Positionen, matched die
                Preisliste und erstellt druckfertige PDFs in Minuten statt Stunden.
              </p>
            </div>

            {/* VetronSupply */}
            <div className={`${styles.card} ${styles.cardDim} ${styles.reveal}`} data-reveal="" data-delay="1">
              <div className={styles.cardNum}>03</div>
              <div className={`${styles.badge} ${styles.badgeSoon}`}>In Planung</div>
              <div className={styles.cardName}>Vetron<em> Supply</em></div>
              <div className={styles.cardCat}>Supply Chain Intelligence</div>
              <p className={styles.cardDesc}>
                KI-gestützte Lieferketten-Analyse, Risikoerkennung und
                automatisierte Bedarfsplanung.
              </p>
            </div>

            {/* In Arbeit */}
            <div className={`${styles.card} ${styles.cardDim} ${styles.reveal}`} data-reveal="" data-delay="2" style={{justifyContent:'center',alignItems:'flex-start'}}>
              <div className={styles.cardNum} style={{marginBottom:'14px'}}>04 +</div>
              <div className={styles.cardName} style={{fontSize:'24px'}}>In Arbeit</div>
              <p className={styles.cardDesc} style={{marginTop:'10px'}}>
                Weitere Werkzeuge entstehen entlang echter Betriebsabläufe — entwickelt
                gemeinsam mit unseren Pilotkunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WARUM VETRON */}
      <section className={`${styles.pad} ${styles.bgMist}`} id="warum">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.reveal}`} data-reveal="">
            <span className={styles.eyebrow}>Warum Vetron</span>
            <h2 className={styles.display}>Europäische Präzision.<br /><em>Kein Kompromiss.</em></h2>
          </div>
          <div className={styles.values}>
            <div className={`${styles.value} ${styles.reveal}`} data-reveal="">
              <div className={styles.valueNum}>01</div>
              <div>
                <h3>Branchentiefe statt Breite</h3>
                <p>Jedes Vetron-Produkt löst ein konkretes, gut verstandenes Problem. Keine generische Software — operative Werkzeuge, die täglich genutzt werden.</p>
              </div>
            </div>
            <div className={`${styles.value} ${styles.reveal}`} data-reveal="" data-delay="1">
              <div className={styles.valueNum}>02</div>
              <div>
                <h3>DSGVO-konform ab Tag 1</h3>
                <p>Alle Daten verbleiben in europäischen Rechenzentren. Datenschutz ist in der Architektur verankert, nicht nachträglich ergänzt.</p>
              </div>
            </div>
            <div className={`${styles.value} ${styles.reveal}`} data-reveal="">
              <div className={styles.valueNum}>03</div>
              <div>
                <h3>KI mit Kontrolle</h3>
                <p>Automatisierung dort, wo sie Sinn macht — mit menschlicher Überprüfung, wo sie erforderlich ist. Volle Transparenz über jeden Entscheidungsschritt.</p>
              </div>
            </div>
            <div className={`${styles.value} ${styles.reveal}`} data-reveal="" data-delay="1">
              <div className={styles.valueNum}>04</div>
              <div>
                <h3>Partnerschaft statt Lizenz</h3>
                <p>Wir begleiten Betriebe beim Onboarding, reagieren innerhalb von 24 Stunden und entwickeln auf Basis echten Feedbacks weiter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÖSTERREICH */}
      <section className={styles.pad}>
        <div className={styles.container}>
          <div className={styles.austriaGrid}>
            <div className={styles.reveal} data-reveal="">
              <span className={styles.eyebrow} style={{display:'block',marginBottom:'18px'}}>Herkunft &amp; Werte</span>
              <h2 className={styles.display}>Entwickelt in<br /><em>Österreich.</em></h2>
              <p>
                Vetron wurde 2026 in Österreich gegründet. Wir sind kein Silicon-Valley-Ableger,
                sondern ein europäisches Softwareunternehmen mit europäischen Werten — das
                produzierende Betriebe durch präzise digitale Werkzeuge stärkt.
              </p>
            </div>
            <div className={`${styles.austriaVisual} ${styles.reveal}`} data-reveal="" data-delay="1">
              <svg viewBox="65 155 375 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={AUSTRIA_PATH} fill="#e7eaf0" stroke="#15243f" strokeWidth="1.4" strokeOpacity="0.35" />
              </svg>
              <span className={styles.austriaLabel}>Republik Österreich · Europäische Union</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.pad} ${styles.cta}`} id="kontakt">
        <div className={styles.ctaBg}></div>
        <div className={styles.container}>
          <h2 className={`${styles.display} ${styles.reveal}`} data-reveal="">Bereit, tiefer<br />zu denken? <em>Wir auch.</em></h2>
          <div className={`${styles.reveal}`} data-reveal="" data-delay="1">
            <button className={`${styles.btn} ${styles.btnLight}`} onClick={openModal}>Kontakt aufnehmen</button>
            <p className={styles.ctaNote}>Wir antworten innerhalb von 24 Stunden · info@vetron.at</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>
              <VetronLogo height={20} />
              <p className={styles.footerTag}>Präzise digitale Werkzeuge für produzierende Betriebe. Entwickelt in Österreich seit 2026.</p>
            </div>
            <div>
              <div className={styles.footerColTitle}>Produkte</div>
              <ul className={styles.footerLinks}>
                <li><Link href="/complianceflow">ComplianceFlow</Link></li>
                <li><a href="#produkte">QuotePilot</a></li>
                <li><a href="#produkte">VetronSupply</a></li>
                <li><button onClick={openModal} style={{background:'none',border:'none',cursor:'pointer',fontSize:'14px',color:'var(--ink-soft)',fontFamily:'inherit',padding:0}}>Enterprise</button></li>
              </ul>
            </div>
            <div>
              <div className={styles.footerColTitle}>Unternehmen</div>
              <ul className={styles.footerLinks}>
                <li><a href="#gedanke">Ansatz</a></li>
                <li><a href="#warum">Über Vetron</a></li>
                <li><button onClick={openModal} style={{background:'none',border:'none',cursor:'pointer',fontSize:'14px',color:'var(--ink-soft)',fontFamily:'inherit',padding:0}}>Kontakt</button></li>
              </ul>
            </div>
            <div>
              <div className={styles.footerColTitle}>Rechtliches</div>
              <ul className={styles.footerLinks}>
                <li><Link href="/impressum">Impressum</Link></li>
                <li><Link href="/datenschutz">Datenschutz</Link></li>
                <li><a href="#">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 Vetron. Alle Rechte vorbehalten. · Österreich</span>
            <div className={styles.footerLegal}>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
          <div className={styles.modalCard}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.eyebrow}>Kontakt</span>
                <div className={styles.modalTitle}>Gespräch anfragen</div>
              </div>
              <button className={styles.modalClose} onClick={closeModal} aria-label="Schließen">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>

            {formState === 'success' ? (
              <div className={styles.modalSuccess}>
                <div className={styles.successIcon}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 13l6 6L22 6" stroke="#1f5132" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3>Anfrage gesendet</h3>
                <p>Vielen Dank — wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={closeModal}>Schließen</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.modalRow}>
                  <div className={styles.field}>
                    <label>Firma *</label>
                    <input type="text" name="firma" required placeholder="Muster GmbH" value={formData.firma} onChange={e => setFormData(p => ({...p, firma: e.target.value}))} />
                  </div>
                  <div className={styles.field}>
                    <label>Name *</label>
                    <input type="text" name="name" required placeholder="Max Mustermann" value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))} />
                  </div>
                </div>
                <div className={styles.modalRow}>
                  <div className={styles.field}>
                    <label>E-Mail *</label>
                    <input type="email" name="email" required placeholder="max@muster.at" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} />
                  </div>
                  <div className={styles.field}>
                    <label>Telefon</label>
                    <input type="tel" name="telefon" placeholder="+43 ..." value={formData.telefon} onChange={e => setFormData(p => ({...p, telefon: e.target.value}))} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Nachricht</label>
                  <textarea name="nachricht" rows={4} placeholder="Womit können wir Ihnen helfen?" value={formData.nachricht} onChange={e => setFormData(p => ({...p, nachricht: e.target.value}))} />
                </div>
                {formState === 'error' && (
                  <p className={styles.modalError}>
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@vetron.at
                  </p>
                )}
                <div className={styles.modalFoot}>
                  <span className={styles.note}>Wir antworten innerhalb von 24 Stunden.</span>
                  <button type="submit" className={styles.modalSubmit} disabled={formState === 'loading'}>
                    {formState === 'loading' ? (
                      <span className={styles.spinner} />
                    ) : (
                      <>
                        <span>Anfrage senden</span>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3 3.5-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
