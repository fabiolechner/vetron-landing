'use client'

import { useEffect, useState } from 'react'
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import styles from './vetron.module.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const AUSTRIA_PATH = "M109.937210,273.113190 C114.332123,272.839661 118.314537,266.669281 117.765663,261.498962 C117.519554,259.180725 118.026360,256.782532 119.027527,253.997086 C123.587273,259.074280 128.911636,258.298981 134.173340,258.207703 C135.823593,258.179077 138.349411,258.732910 139.008438,259.869904 C142.313080,265.571350 147.503159,265.484131 152.894150,265.091919 C157.383316,264.765289 162.526581,265.777466 164.476089,259.789948 C164.593597,259.429047 165.251602,259.201111 165.697205,258.996521 C174.149780,255.115891 181.799927,249.013336 191.851395,249.553085 C195.172623,249.731430 198.161240,249.378479 199.175385,245.367401 C199.312775,244.824036 200.330246,244.379700 201.026474,244.138733 C201.623856,243.931992 202.356293,243.997482 203.009125,244.087173 C209.671478,245.002289 216.372971,245.729675 222.958374,247.038498 C224.574463,247.359695 226.285416,249.364624 227.123535,251.016235 C229.265915,255.238068 230.345352,260.200897 236.056000,261.396698 C236.712219,259.028564 237.791519,256.694763 237.854050,254.334000 C237.892792,252.871902 236.646301,251.107941 235.495316,249.963791 C234.510391,248.984711 232.546677,249.001556 231.536392,248.034256 C229.643860,246.222198 226.844666,244.047256 226.795242,241.966873 C226.739243,239.610779 229.289322,237.192734 231.324570,233.758240 C230.800293,233.140366 229.615005,231.260330 227.989319,229.910812 C220.774124,223.921249 222.876694,213.148926 231.940735,210.478653 C233.408157,210.046341 234.505142,208.481766 235.911469,207.683990 C237.538498,206.761002 239.278687,205.558319 241.038559,205.431458 C248.726242,204.877167 252.121597,202.000854 253.276657,194.440018 C253.476425,193.132401 253.706635,191.805771 253.683548,190.492111 C253.604965,186.022049 255.795807,184.942657 259.724915,186.263687 C260.813110,186.629562 261.911133,186.966141 263.005341,187.314117 C267.509918,188.746613 269.427277,187.722610 268.444824,183.176895 C266.938751,176.208405 272.272552,176.114243 275.132874,174.277847 C277.739777,176.105469 279.887604,177.398804 281.769043,179.004288 C283.042572,180.091034 284.780273,181.569763 284.858032,182.954681 C285.145355,188.074326 288.676880,189.884689 292.526154,189.620941 C299.036377,189.174866 305.496124,187.708313 311.904755,186.333588 C313.016754,186.095062 313.826874,184.233414 314.680756,183.052277 C316.424530,180.640137 317.581635,177.146271 319.922272,175.966370 C324.188446,173.815796 325.201904,170.156693 326.081543,166.422791 C327.529907,160.274567 330.143890,158.911041 336.024963,161.621094 C339.602905,163.269836 343.278534,164.796310 347.049347,165.904419 C349.478943,166.618393 352.189209,166.314514 354.720459,166.765457 C356.713715,167.120590 358.649536,167.867462 360.561707,168.573517 C361.296875,168.844955 361.985352,169.981216 362.543274,169.880692 C368.398743,168.825836 371.477600,172.698837 375.064423,176.239258 C378.049744,179.185974 388.566345,179.145554 392.389374,176.827393 C397.227600,173.893616 401.423431,174.261978 405.854431,177.759781 C407.108917,178.750031 408.874756,180.079132 410.169098,179.859070 C415.393433,178.970871 417.194305,182.584427 418.767151,186.105133 C420.381104,189.717834 420.045410,193.241699 417.530975,196.794739 C414.362732,201.271683 417.111633,212.292572 421.688599,215.785065 C423.243835,216.971832 424.678864,218.321472 426.125854,219.643707 C431.290649,224.363113 429.563446,229.945526 428.025757,235.469971 C427.818451,236.214706 427.302948,237.429901 426.851013,237.467133 C419.767517,238.050858 423.595398,242.233292 424.349640,245.181580 C425.542725,249.845627 424.013428,252.529083 419.321075,252.319016 C414.081207,252.084427 408.391602,254.265244 403.677643,249.532684 C403.000275,248.852600 399.587616,250.897018 397.663422,252.231369 C405.441589,255.545883 411.337677,260.656982 403.943176,270.030212 C403.155212,271.029022 402.038116,272.329559 400.962952,272.443390 C396.268524,272.940216 396.018280,274.672821 398.229645,278.498566 C399.126373,280.049957 398.149139,282.684509 397.947388,286.153992 C402.312775,291.542236 399.859985,298.352356 391.921692,300.989716 C388.511169,302.122833 385.919128,305.755524 382.997284,308.300903 C382.150177,309.038849 381.518982,310.572388 380.668945,310.667236 C376.286987,311.156281 375.844971,313.324219 376.731720,317.203400 C377.661255,321.269928 375.933441,322.630188 372.179382,320.905121 C368.928070,319.411041 366.193329,319.011871 362.933014,320.868591 C361.339539,321.776062 359.067139,321.432526 357.140747,321.838715 C356.146393,322.048370 354.953033,322.417084 354.341095,323.133667 C352.394531,325.413147 350.912964,329.629211 348.822571,329.910736 C345.027924,330.421814 340.505524,329.426483 337.060760,327.600189 C333.202576,325.554749 330.436462,325.201996 327.331482,328.321014 C326.422943,329.233704 325.161560,330.372955 324.040283,330.396881 C319.002502,330.504425 315.936737,333.631683 312.873199,336.958527 C310.072876,339.999542 307.166779,342.540192 302.818054,339.161987 C302.050415,338.565643 300.554443,338.796295 299.399841,338.828125 C294.732300,338.956665 290.587036,337.833527 286.130890,336.009308 C280.162140,333.565796 273.338013,333.214386 266.882874,331.955750 C251.117508,328.881744 235.395676,325.555664 219.570190,322.831238 C211.829926,321.498718 207.615677,316.395691 203.478928,310.667084 C202.100586,308.758301 200.326157,307.034607 198.440872,305.613617 C194.357239,302.535583 193.998810,299.461823 197.176590,293.628235 C195.161636,294.290466 193.176605,295.070618 191.125656,295.591156 C186.447845,296.778412 181.770706,298.012421 177.033188,298.910400 C169.469833,300.344055 161.834320,301.399292 154.276474,302.858734 C150.788223,303.532318 150.216537,306.486420 150.565750,309.447845 C151.246628,315.221832 146.939743,316.543427 143.008102,317.593414 C137.022186,319.192047 133.118835,317.567749 131.401413,313.266724 C130.166855,310.174927 128.948807,308.294220 125.227684,310.515900 C123.636795,311.465729 121.110092,311.988739 119.513527,311.380432 C118.479385,310.986450 118.244987,308.217865 117.871811,306.466492 C117.643120,305.393188 117.829529,304.231384 117.829529,301.437469 C113.814644,303.995300 110.607063,305.636047 107.881691,307.866119 C103.401428,311.532166 97.644989,310.545807 94.489075,305.043274 C92.626587,301.795929 91.392586,298.645996 86.549309,298.173645 C83.382309,297.864777 80.267448,295.254395 77.481491,293.197693 C72.673882,289.648560 72.114021,285.486206 73.937721,279.354736 C75.240364,274.975098 75.688118,270.308563 76.188972,265.734070 C76.550240,262.434418 86.361595,253.111725 88.429634,254.867004 C93.076126,258.810822 101.426262,257.273193 103.298843,265.032013 C103.523003,265.960785 104.146317,266.793243 104.440933,267.382843 C106.617485,267.049316 108.596260,266.746124 110.575043,266.442932 C110.643654,267.953094 110.712273,269.463226 110.531326,271.396942 C110.166908,272.251404 110.052055,272.682281 109.937210,273.113190 M79.913033,272.157959 C78.949188,275.313141 77.716064,278.418640 77.120872,281.641876 C76.754478,283.626068 76.556175,286.705475 77.685471,287.700073 C80.940376,290.566772 84.663292,293.874084 88.662140,294.655457 C92.801376,295.464233 94.579697,297.250092 96.225540,300.555176 C99.775291,307.683533 101.671890,307.634460 107.981026,302.726929 C111.049057,300.340454 115.337494,299.522949 119.073471,297.995209 C120.078217,301.037292 121.075958,304.081787 122.101677,307.116760 C122.179779,307.347870 122.456161,307.511932 122.634140,307.700531 C129.296982,303.683716 131.711212,304.189148 134.301758,311.145264 C136.006958,315.724060 139.414490,314.038055 142.138977,313.879272 C144.952057,313.715302 147.243408,312.541687 147.115128,308.546692 C146.909058,302.127960 149.891357,299.263123 156.150848,298.441010 C158.606262,298.118500 161.023132,297.511505 163.473755,297.141174 C168.039337,296.451263 172.629837,295.919312 177.185257,295.171112 C180.967896,294.549835 184.747971,293.846649 188.468719,292.933441 C192.227646,292.010834 195.856659,290.472931 199.648239,289.798767 C202.314651,289.324677 205.085541,293.971771 203.130219,295.350525 C196.780777,299.827850 200.858139,302.108307 204.335327,305.068481 C205.662613,306.198425 206.439636,308.019196 207.340683,309.597473 C210.677139,315.441742 215.462708,318.577515 222.311615,319.705597 C237.473312,322.202820 252.525696,325.372040 267.605804,328.352509 C274.518066,329.718689 281.389679,331.290344 288.281464,332.760742 C293.031036,333.774078 297.947937,334.303192 302.495148,335.892517 C308.864655,338.118774 311.254669,333.726227 314.324829,329.974365 C314.908325,329.261292 315.958618,328.814056 316.881317,328.514679 C321.065674,327.157104 325.646790,326.694489 328.530365,322.633881 C328.938110,322.059723 330.437469,321.843048 331.269257,322.066132 C333.752533,322.732086 336.336121,323.374176 338.554688,324.610352 C344.741699,328.057678 348.189392,327.148163 351.125427,321.035431 C351.647247,319.949036 352.584686,318.431396 353.521606,318.277435 C359.663269,317.268341 365.857544,316.579193 371.087738,315.907227 C372.973755,313.076324 374.455902,310.350189 376.434143,308.050873 C377.856018,306.398285 379.966888,305.349579 381.722870,303.970978 C384.773682,301.575745 387.446228,298.151184 390.900391,296.950409 C395.628845,295.306702 397.103546,292.569702 394.232147,288.198975 C393.329559,286.825043 393.510620,284.658051 393.437195,282.844269 C393.369202,281.165192 394.097290,279.334076 393.650269,277.812103 C392.169250,272.769714 392.827179,270.610016 397.845123,269.048157 C401.588196,267.883148 404.013031,265.219818 403.409454,262.051300 C403.036011,260.090881 399.190186,258.840668 396.986115,257.162689 C395.570374,256.084869 393.322052,254.933670 393.152771,253.598969 C392.589996,249.162354 401.969147,243.387970 405.414459,246.184219 C410.336121,250.178619 415.502075,248.741135 421.282227,248.718445 C420.709900,246.834381 420.378937,245.432526 419.862640,244.102661 C418.183258,239.776917 417.637085,235.974533 423.533539,234.512589 C424.133057,234.363953 424.782166,233.485138 424.985779,232.816498 C426.676025,227.266541 425.085327,222.676193 420.346313,219.094208 C412.762268,213.361801 410.349701,202.056488 414.992493,194.006058 C417.466858,189.715591 415.267456,185.065674 410.539978,183.791245 C408.058380,183.122223 405.908813,181.231628 403.428711,180.544434 C400.711334,179.791504 397.180115,178.603287 395.064850,179.683334 C388.768677,182.898087 382.503448,183.323273 376.246307,180.873322 C370.708221,178.704895 367.276550,172.226669 360.224335,172.774475 C359.585205,172.824097 358.919495,171.789291 358.178192,171.450638 C357.227020,171.016129 356.207733,170.623489 355.180786,170.482483 C352.315216,170.089020 349.311829,170.239975 346.578491,169.439590 C341.157257,167.852097 335.880829,165.770081 331.393311,164.191086 C329.134369,168.939194 328.050415,173.866211 325.032990,176.814209 C322.022797,179.755112 318.110107,181.366150 317.295044,186.296432 C317.052795,187.761948 314.613708,189.640137 312.924438,189.956039 C305.695068,191.307938 298.389404,192.636856 291.069763,192.929367 C288.178436,193.044922 282.774353,190.621017 282.652161,189.034637 C282.175171,182.843430 278.010620,181.120697 273.427948,178.987198 C272.211853,182.836411 272.100952,188.211166 269.492340,190.057999 C266.781372,191.977325 261.655579,190.485748 257.293854,190.485748 C257.216400,192.132111 257.098511,194.084854 257.038300,196.039383 C256.928162,199.615921 250.634888,208.799149 247.346985,208.717773 C242.192413,208.590179 238.624115,210.978561 234.401566,213.321350 C225.728149,218.133621 224.781189,221.534943 231.977631,228.197220 C235.776672,231.714264 236.293655,235.266724 233.705978,238.180786 C232.532806,239.501953 230.721497,242.032928 231.154114,242.654327 C232.241089,244.215530 234.310425,245.444321 236.221451,246.008667 C240.495178,247.270767 242.699951,250.825531 241.582672,255.266037 C240.980667,257.658600 240.460205,260.095306 240.197495,262.543701 C239.863190,265.659210 238.609161,266.550781 235.545456,265.482391 C229.573090,263.399658 226.022980,259.163300 224.233154,253.329559 C223.060196,249.506439 220.426743,249.439407 217.145813,249.782120 C215.036224,250.002441 212.822754,249.502518 210.687302,249.140121 C206.952301,248.506271 202.759171,245.014206 200.314468,251.288498 C199.991653,252.117035 198.036606,252.501602 196.771957,252.731766 C194.016647,253.233185 191.162170,254.048965 188.449265,253.766373 C179.593628,252.843857 174.571060,260.521759 167.196869,262.814362 C166.842804,262.924469 166.709274,263.658539 166.415070,264.059479 C162.714417,269.102509 144.694672,270.989746 140.051331,266.808289 C139.696091,266.488403 139.492981,265.994171 139.237259,265.570038 C137.288055,262.337616 134.375824,261.495728 130.763824,261.797699 C127.800461,262.045410 124.799904,261.848206 121.418976,261.848206 C122.680946,269.222748 116.903244,273.245361 112.354889,277.910431 C110.374100,279.942078 106.308098,278.973358 105.024254,276.485748 C102.903267,272.376007 100.810875,268.240234 98.442535,264.272980 C96.576935,261.147888 87.027763,259.776947 83.806641,261.449158 C79.448891,263.711395 79.758728,267.440308 79.913033,272.157959"

const CF_PATH = "M206.40 269.50 c-12.20 -3.79 -16.28 -18.47 -7.78 -27.90 c3.65 -4.03 7.19 -5.54 13.32 -5.54 c3.16 -0.05 4.08 0.15 6.85 1.51 c1.70 0.88 3.69 2.14 4.33 2.87 l1.22 1.26 l-4.38 -0.29 c-2.38 -0.19 -5.88 -0.44 -7.78 -0.58 c-4.33 -0.34 -6.56 0.34 -9.38 2.87 c-2.87 2.67 -4.03 5.35 -4.03 9.33 c0 3.45 1.02 6.32 3.16 8.85 c1.46 1.70 6.27 4.33 7.05 3.79 c0.34 -0.19 0.53 -4.08 0.53 -11.18 c0 -9.43 0.10 -10.89 0.78 -11.13 c0.44 -0.15 5.25 -0.29 10.69 -0.29 l9.92 0 l0 1.94 l0 1.94 l-8.51 0 l-8.51 0 l0 2.19 l0 2.14 l4.72 0.15 l4.67 0.15 l0.10 1.46 c0.15 2.38 -0.44 2.67 -5.15 2.67 l-4.33 0 l0 5.15 c0 5.10 0 5.10 1.12 4.81 c1.56 -0.49 4.91 -2.48 5.69 -3.35 c0.34 -0.44 0.97 -0.78 1.41 -0.78 c1.22 0.05 3.16 1.75 2.82 2.53 c-0.49 1.31 -6.13 5.25 -8.26 5.74 c-2.92 0.68 -7.49 0.53 -10.26 -0.29z"

function CFIcon({ size = 22, color = '#1B5E20' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="185 228 58 58" fill="none">
      <g fill={color}>
        <path d={CF_PATH} />
      </g>
    </svg>
  )
}

export default function VetronPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable} ${styles.root}`}>

      {/* ── NAV ── */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <a href="#" className={styles.navLogo}>Vetron</a>
        <ul className={styles.navLinks}>
          <li><a href="#produkte">Produkte</a></li>
          <li><a href="#ansatz">Ansatz</a></li>
          <li><a href="#unternehmen">Unternehmen</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
        <a href="mailto:info@vetron.at" className={styles.navCta}>Kontakt aufnehmen</a>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Präzise Software. Europäische Qualität.</p>
          <div className={styles.heroRule} />
          <h1 className={styles.heroHeadline}>
            Software die<br />Betriebe<br />
            <em>bewegt</em>
          </h1>
          <p className={styles.heroSub}>
            Wir entwickeln digitale Werkzeuge für produzierende Unternehmen —
            präzise, zuverlässig, ohne Kompromisse.
          </p>
          <div className={styles.heroActions}>
            <a href="#produkte" className={styles.heroBtnPrimary}>Unsere Lösungen</a>
            <a href="#ansatz" className={styles.heroBtnGhost}>
              <span className={styles.heroBtnGhostLine} />
              Über Vetron
            </a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.heroScrollLine}>
            <div className={styles.heroScrollFill} />
          </div>
          <span className={styles.heroScrollTxt}>Scroll</span>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className={styles.prodSection} id="produkte">
        <div className={styles.prodInner}>
          <div className={styles.prodHeader}>
            <div>
              <div className={styles.sectionTag}>Produktportfolio</div>
              <h2 className={styles.sectionHeadline}>
                Präzise Lösungen<br />
                <em>für jeden Betrieb</em>
              </h2>
            </div>
            <p className={styles.prodSub}>
              Jedes Produkt adressiert eine konkrete operative Herausforderung —
              entwickelt für Zuverlässigkeit, Datenschutz und echten Nutzen.
            </p>
          </div>

          <div className={styles.prodGrid}>

            {/* ComplianceFlow */}
            <div className={`${styles.pCard} ${styles.pCardCF}`}>
              <div className={styles.pCardTopCF} />
              <div className={styles.pNum}>01</div>
              <div className={styles.pIcon}><CFIcon size={22} color="#1B5E20" /></div>
              <div className={styles.pNameCF}>ComplianceFlow</div>
              <div className={styles.pCat}>CE-Dokumentation &amp; Compliance</div>
              <div className={styles.pBadgeCF}>
                <span className={styles.pBadgeDot} />
                Live verfügbar
              </div>
              <p className={styles.pDescCF}>
                Automatisierte CE-Erklärungen und Sicherheitsdatenblätter von Lieferanten —
                wöchentlicher Zyklus, KI-kategorisiert, ohne manuelle Nachverfolgung.
              </p>
              <Link href="/complianceflow" className={styles.pLinkCF}>
                <span className={styles.pLinkLine} />
                Produkt ansehen
              </Link>
            </div>

            {/* VetronAudit */}
            <div className={`${styles.pCard} ${styles.pCardDim}`}>
              <div className={styles.pCardTopDim} />
              <div className={styles.pNumDim}>02</div>
              <div className={styles.pNameDim}>Vetron<em> Audit</em></div>
              <div className={styles.pCatDim}>Qualitätsmanagement</div>
              <p className={styles.pDescDim}>
                Automatisierte Lieferantenaudits, digitale Audit-Trails und
                intelligente Eskalation für produzierende Betriebe.
              </p>
              <span className={styles.pSoon}>In Entwicklung</span>
            </div>

            {/* VetronSupply */}
            <div className={`${styles.pCard} ${styles.pCardFaint}`}>
              <div className={styles.pCardTopFaint} />
              <div className={styles.pNumFaint}>03</div>
              <div className={styles.pNameFaint}>Vetron<em> Supply</em></div>
              <div className={styles.pCatFaint}>Supply Chain Intelligence</div>
              <p className={styles.pDescFaint}>
                KI-gestützte Lieferketten-Analyse, Risikoerkennung und
                automatisierte Bedarfsplanung.
              </p>
              <span className={`${styles.pSoon} ${styles.pSoonFaint}`}>In Planung</span>
            </div>

            {/* Enterprise */}
            <div className={`${styles.pCard} ${styles.pCardEnt}`}>
              <div className={styles.pCardTopEnt} />
              <div className={styles.pNum}>—</div>
              <div className={styles.pNameEnt}>Enterprise</div>
              <div className={styles.pCatEnt}>Individuallösungen</div>
              <p className={styles.pDescEnt}>
                Maßgeschneiderte Entwicklung auf Basis der Vetron-Plattform
                für spezifische Betriebsanforderungen.
              </p>
              <a href="mailto:info@vetron.at" className={styles.pLinkEnt}>
                <span className={styles.pLinkLineEnt} />
                Gespräch anfragen
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className={styles.whySection} id="ansatz">
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <div className={styles.sectionTag}>Warum Vetron</div>
            <h2 className={styles.sectionHeadline}>
              Europäische<br />Präzision.<br />
              <em>Kein Kompromiss.</em>
            </h2>
            <p className={styles.whySub}>
              Wir bauen Software für Unternehmen die Verlässlichkeit
              über Marketingversprechen stellen.
            </p>
          </div>
          <div className={styles.whyItems}>
            {([
              ['01', 'Branchentiefe statt Breite', 'Jedes Vetron-Produkt löst ein konkretes, gut verstandenes Problem. Keine generische Software — operative Werkzeuge die täglich genutzt werden.'],
              ['02', 'DSGVO-konform ab Tag 1', 'Alle Daten verbleiben in europäischen Rechenzentren. Datenschutz ist in der Architektur verankert, nicht nachträglich ergänzt.'],
              ['03', 'KI mit Kontrolle', 'Automatisierung dort wo sie Sinn macht — mit menschlicher Überprüfung wo sie erforderlich ist. Volle Transparenz über jeden Entscheidungsschritt.'],
              ['04', 'Partnerschaft statt Lizenz', 'Wir begleiten Betriebe beim Onboarding, reagieren innerhalb von 24 Stunden und entwickeln auf Basis echten Feedbacks weiter.'],
            ] as [string, string, string][]).map(([n, t, d]) => (
              <div key={n} className={styles.whyItem}>
                <span className={styles.whyNum}>{n}</span>
                <div>
                  <div className={styles.whyTitle}>{t}</div>
                  <div className={styles.whyDesc}>{d}</div>
                </div>
              </div>
            ))}
            <div className={styles.whyItemBorder} />
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className={styles.approachSection} id="unternehmen">
        <div className={styles.approachInner}>
          <div className={styles.sectionTag}>Unser Ansatz</div>
          <h2 className={`${styles.sectionHeadline} ${styles.approachHl}`}>
            Wie wir Software<br /><em>entwickeln</em>
          </h2>
          <div className={styles.approachGrid}>
            {([
              ['01', 'Problem zuerst', 'Jede Anwendung beginnt mit tiefer Auseinandersetzung mit dem operativen Kontext. Technologie ist das Mittel, nicht der Zweck.'],
              ['02', 'Schlankes Design', 'Klare Interfaces, keine überflüssigen Funktionen. Software die in hektischen Umgebungen funktioniert muss intuitiv bedienbar sein.'],
              ['03', 'Iterative Qualität', 'Wir deployen früh, lernen schnell und verbessern kontinuierlich. Kein Produkt das nicht täglich im Einsatz getestet wurde.'],
              ['04', 'KI als Werkzeug', 'Wir integrieren KI dort wo sie messbare Effizienzgewinne schafft — als operative Kern-Funktionalität, nicht als Feature-Flag.'],
              ['05', 'Europäische Standards', 'DSGVO, NIS2, AI Act — regulatorische Anforderungen sind von Anfang an eingebaut, nicht nachträglich ergänzt.'],
              ['06', 'Langfristige Perspektive', 'Wir bauen für Betriebe die Jahrzehnte bestehen — nachhaltige Qualität die Vertrauen verdient, kein Wachstum um jeden Preis.'],
            ] as [string, string, string][]).map(([n, t, d]) => (
              <div key={n} className={styles.approachItem}>
                <div className={styles.approachNum}>{n}</div>
                <div className={styles.approachTitle}>{t}</div>
                <div className={styles.approachDesc}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUSTRIA ── */}
      <section className={styles.austriaSection}>
        <div className={styles.austriaInner}>
          <div>
            <div className={`${styles.sectionTag} ${styles.sectionTagGold}`}>Herkunft &amp; Werte</div>
            <h2 className={`${styles.sectionHeadline} ${styles.austriaHl}`}>
              Entwickelt in<br /><em>Österreich</em>
            </h2>
            <p className={styles.austriaDesc}>
              Vetron wurde 2026 in Österreich gegründet. Wir sind kein Silicon Valley Ableger —
              sondern ein europäisches Softwareunternehmen mit europäischen Werten, das
              produzierende Betriebe durch präzise digitale Werkzeuge stärkt.
            </p>
          </div>
          <div className={styles.austriaRight}>
            <svg width="300" height="160" viewBox="65 155 375 200" fill="none">
              <path d={`${AUSTRIA_PATH} z`} fill="#F0F2F5" stroke="rgba(240,242,245,0.2)" strokeWidth="1" />
            </svg>
            <span className={styles.austriaLabel}>Republik Österreich · Europäische Union</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} id="kontakt">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHl}>
            Bereit für das<br />Gespräch?<br /><em>Wir auch.</em>
          </h2>
          <div className={styles.ctaActions}>
            <a href="mailto:info@vetron.at" className={styles.ctaBtn}>info@vetron.at</a>
            <span className={styles.ctaNote}>Wir antworten innerhalb von 24 Stunden</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerBrand}>Vetron</div>
            <p className={styles.footerTagline}>
              Präzise digitale Werkzeuge für produzierende Betriebe.
              Entwickelt in Österreich seit 2026.
            </p>
          </div>
          <div>
            <div className={styles.footerColTitle}>Produkte</div>
            <ul className={styles.footerLinks}>
              <li><Link href="/complianceflow">ComplianceFlow</Link></li>
              <li><a>VetronAudit</a></li>
              <li><a>VetronSupply</a></li>
              <li><a href="mailto:info@vetron.at">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.footerColTitle}>Unternehmen</div>
            <ul className={styles.footerLinks}>
              <li><a href="#ansatz">Ansatz</a></li>
              <li><a href="#unternehmen">Über Vetron</a></li>
              <li><a href="mailto:info@vetron.at">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.footerColTitle}>Rechtliches</div>
            <ul className={styles.footerLinks}>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><a>AGB</a></li>
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
      </footer>

    </div>
  )
}
