'use client'

import { useEffect, useRef, useState } from 'react'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import styles from './complianceflow.module.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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


function CheckIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color }}>
      <path d="M2 7l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ComplianceFlowPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [videoClicked, setVideoClicked] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeIcon, setActiveIcon] = useState(0)

  const VIDEO_CHAPTERS = [
    { label: 'Upload',    start: 0  },
    { label: 'KI & Email', start: 10 },
    { label: 'Versand',   start: 20 },
    { label: 'Abgleich',  start: 22 },
  ]

  function getActiveChapter(t: number) {
    let active = 0
    for (let i = 0; i < VIDEO_CHAPTERS.length; i++) {
      if (t >= VIDEO_CHAPTERS[i].start) active = i
    }
    return active
  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [tlActive, setTlActive] = useState(2)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firma: '', name: '', email: '', telefon: '', nachricht: ''
  })

  // Nav scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-cycle workflow steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  function openModal() { setShowModal(true) }
  function closeModal() {
    setShowModal(false)
    setFormState('idle')
    setFormData({ firma: '', name: '', email: '', telefon: '', nachricht: '' })
  }

  const workflowSteps = [
    {
      num: '01',
      title: 'Excel hochladen',
      desc: 'Montag morgen laden Sie Ihre Artikelliste hoch — Bestellnummer, Artikelname, Lieferant. Die KI übernimmt vollständig ab hier.',
      vtLabel: 'Montag',
      vtDay: 'Upload',
    },
    {
      num: '02',
      title: 'KI kategorisiert & sucht Emails',
      desc: 'Jeder Artikel wird als CE oder TDB eingestuft. Gleichzeitig findet der Email-Finder die Compliance-Abteilung jedes Lieferanten.',
      vtLabel: 'Montag',
      vtDay: 'KI & Email',
    },
    {
      num: '03',
      title: 'Review & Versand',
      desc: 'Sie prüfen die gefundenen Kontakte kurz — ein Klick, und professionelle Anfragen gehen automatisch von compliance@vetron.at raus.',
      vtLabel: 'Dienstag',
      vtDay: 'Versand',
    },
    {
      num: '04',
      title: 'Eingang & automatische Zuordnung',
      desc: 'Freitags liest das System alle eingegangenen PDFs ein, ordnet sie zu. Fehlende Dokumente werden automatisch eskaliert.',
      vtLabel: 'Freitag',
      vtDay: 'Abgleich',
    },
  ]

  const TIMELINE_NODES = [
    { day: 'Mo',    label: 'Upload'    },
    { day: 'Mo',    label: 'KI & Email'},
    { day: 'Di',    label: 'Versand'   },
    { day: 'Mi–Do', label: 'Eingang'   },
    { day: 'Fr',    label: 'Abgleich'  },
  ]

  const AUSTRIA_PATH = "M109.937210,273.113190 C114.332123,272.839661 118.314537,266.669281 117.765663,261.498962 C117.519554,259.180725 118.026360,256.782532 119.027527,253.997086 C123.587273,259.074280 128.911636,258.298981 134.173340,258.207703 C135.823593,258.179077 138.349411,258.732910 139.008438,259.869904 C142.313080,265.571350 147.503159,265.484131 152.894150,265.091919 C157.383316,264.765289 162.526581,265.777466 164.476089,259.789948 C164.593597,259.429047 165.251602,259.201111 165.697205,258.996521 C174.149780,255.115891 181.799927,249.013336 191.851395,249.553085 C195.172623,249.731430 198.161240,249.378479 199.175385,245.367401 C199.312775,244.824036 200.330246,244.379700 201.026474,244.138733 C201.623856,243.931992 202.356293,243.997482 203.009125,244.087173 C209.671478,245.002289 216.372971,245.729675 222.958374,247.038498 C224.574463,247.359695 226.285416,249.364624 227.123535,251.016235 C229.265915,255.238068 230.345352,260.200897 236.056000,261.396698 C236.712219,259.028564 237.791519,256.694763 237.854050,254.334000 C237.892792,252.871902 236.646301,251.107941 235.495316,249.963791 C234.510391,248.984711 232.546677,249.001556 231.536392,248.034256 C229.643860,246.222198 226.844666,244.047256 226.795242,241.966873 C226.739243,239.610779 229.289322,237.192734 231.324570,233.758240 C230.800293,233.140366 229.615005,231.260330 227.989319,229.910812 C220.774124,223.921249 222.876694,213.148926 231.940735,210.478653 C233.408157,210.046341 234.505142,208.481766 235.911469,207.683990 C237.538498,206.761002 239.278687,205.558319 241.038559,205.431458 C248.726242,204.877167 252.121597,202.000854 253.276657,194.440018 C253.476425,193.132401 253.706635,191.805771 253.683548,190.492111 C253.604965,186.022049 255.795807,184.942657 259.724915,186.263687 C260.813110,186.629562 261.911133,186.966141 263.005341,187.314117 C267.509918,188.746613 269.427277,187.722610 268.444824,183.176895 C266.938751,176.208405 272.272552,176.114243 275.132874,174.277847 C277.739777,176.105469 279.887604,177.398804 281.769043,179.004288 C283.042572,180.091034 284.780273,181.569763 284.858032,182.954681 C285.145355,188.074326 288.676880,189.884689 292.526154,189.620941 C299.036377,189.174866 305.496124,187.708313 311.904755,186.333588 C313.016754,186.095062 313.826874,184.233414 314.680756,183.052277 C316.424530,180.640137 317.581635,177.146271 319.922272,175.966370 C324.188446,173.815796 325.201904,170.156693 326.081543,166.422791 C327.529907,160.274567 330.143890,158.911041 336.024963,161.621094 C339.602905,163.269836 343.278534,164.796310 347.049347,165.904419 C349.478943,166.618393 352.189209,166.314514 354.720459,166.765457 C356.713715,167.120590 358.649536,167.867462 360.561707,168.573517 C361.296875,168.844955 361.985352,169.981216 362.543274,169.880692 C368.398743,168.825836 371.477600,172.698837 375.064423,176.239258 C378.049744,179.185974 388.566345,179.145554 392.389374,176.827393 C397.227600,173.893616 401.423431,174.261978 405.854431,177.759781 C407.108917,178.750031 408.874756,180.079132 410.169098,179.859070 C415.393433,178.970871 417.194305,182.584427 418.767151,186.105133 C420.381104,189.717834 420.045410,193.241699 417.530975,196.794739 C414.362732,201.271683 417.111633,212.292572 421.688599,215.785065 C423.243835,216.971832 424.678864,218.321472 426.125854,219.643707 C431.290649,224.363113 429.563446,229.945526 428.025757,235.469971 C427.818451,236.214706 427.302948,237.429901 426.851013,237.467133 C419.767517,238.050858 423.595398,242.233292 424.349640,245.181580 C425.542725,249.845627 424.013428,252.529083 419.321075,252.319016 C414.081207,252.084427 408.391602,254.265244 403.677643,249.532684 C403.000275,248.852600 399.587616,250.897018 397.663422,252.231369 C405.441589,255.545883 411.337677,260.656982 403.943176,270.030212 C403.155212,271.029022 402.038116,272.329559 400.962952,272.443390 C396.268524,272.940216 396.018280,274.672821 398.229645,278.498566 C399.126373,280.049957 398.149139,282.684509 397.947388,286.153992 C402.312775,291.542236 399.859985,298.352356 391.921692,300.989716 C388.511169,302.122833 385.919128,305.755524 382.997284,308.300903 C382.150177,309.038849 381.518982,310.572388 380.668945,310.667236 C376.286987,311.156281 375.844971,313.324219 376.731720,317.203400 C377.661255,321.269928 375.933441,322.630188 372.179382,320.905121 C368.928070,319.411041 366.193329,319.011871 362.933014,320.868591 C361.339539,321.776062 359.067139,321.432526 357.140747,321.838715 C356.146393,322.048370 354.953033,322.417084 354.341095,323.133667 C352.394531,325.413147 350.912964,329.629211 348.822571,329.910736 C345.027924,330.421814 340.505524,329.426483 337.060760,327.600189 C333.202576,325.554749 330.436462,325.201996 327.331482,328.321014 C326.422943,329.233704 325.161560,330.372955 324.040283,330.396881 C319.002502,330.504425 315.936737,333.631683 312.873199,336.958527 C310.072876,339.999542 307.166779,342.540192 302.818054,339.161987 C302.050415,338.565643 300.554443,338.796295 299.399841,338.828125 C294.732300,338.956665 290.587036,337.833527 286.130890,336.009308 C280.162140,333.565796 273.338013,333.214386 266.882874,331.955750 C251.117508,328.881744 235.395676,325.555664 219.570190,322.831238 C211.829926,321.498718 207.615677,316.395691 203.478928,310.667084 C202.100586,308.758301 200.326157,307.034607 198.440872,305.613617 C194.357239,302.535583 193.998810,299.461823 197.176590,293.628235 C195.161636,294.290466 193.176605,295.070618 191.125656,295.591156 C186.447845,296.778412 181.770706,298.012421 177.033188,298.910400 C169.469833,300.344055 161.834320,301.399292 154.276474,302.858734 C150.788223,303.532318 150.216537,306.486420 150.565750,309.447845 C151.246628,315.221832 146.939743,316.543427 143.008102,317.593414 C137.022186,319.192047 133.118835,317.567749 131.401413,313.266724 C130.166855,310.174927 128.948807,308.294220 125.227684,310.515900 C123.636795,311.465729 121.110092,311.988739 119.513527,311.380432 C118.479385,310.986450 118.244987,308.217865 117.871811,306.466492 C117.643120,305.393188 117.829529,304.231384 117.829529,301.437469 C113.814644,303.995300 110.607063,305.636047 107.881691,307.866119 C103.401428,311.532166 97.644989,310.545807 94.489075,305.043274 C92.626587,301.795929 91.392586,298.645996 86.549309,298.173645 C83.382309,297.864777 80.267448,295.254395 77.481491,293.197693 C72.673882,289.648560 72.114021,285.486206 73.937721,279.354736 C75.240364,274.975098 75.688118,270.308563 76.188972,265.734070 C76.550240,262.434418 86.361595,253.111725 88.429634,254.867004 C93.076126,258.810822 101.426262,257.273193 103.298843,265.032013 C103.523003,265.960785 104.146317,266.793243 104.440933,267.382843 C106.617485,267.049316 108.596260,266.746124 110.575043,266.442932 C110.643654,267.953094 110.712273,269.463226 110.531326,271.396942 C110.166908,272.251404 110.052055,272.682281 109.937210,273.113190 M79.913033,272.157959 C78.949188,275.313141 77.716064,278.418640 77.120872,281.641876 C76.754478,283.626068 76.556175,286.705475 77.685471,287.700073 C80.940376,290.566772 84.663292,293.874084 88.662140,294.655457 C92.801376,295.464233 94.579697,297.250092 96.225540,300.555176 C99.775291,307.683533 101.671890,307.634460 107.981026,302.726929 C111.049057,300.340454 115.337494,299.522949 119.073471,297.995209 C120.078217,301.037292 121.075958,304.081787 122.101677,307.116760 C122.179779,307.347870 122.456161,307.511932 122.634140,307.700531 C129.296982,303.683716 131.711212,304.189148 134.301758,311.145264 C136.006958,315.724060 139.414490,314.038055 142.138977,313.879272 C144.952057,313.715302 147.243408,312.541687 147.115128,308.546692 C146.909058,302.127960 149.891357,299.263123 156.150848,298.441010 C158.606262,298.118500 161.023132,297.511505 163.473755,297.141174 C168.039337,296.451263 172.629837,295.919312 177.185257,295.171112 C180.967896,294.549835 184.747971,293.846649 188.468719,292.933441 C192.227646,292.010834 195.856659,290.472931 199.648239,289.798767 C202.314651,289.324677 205.085541,293.971771 203.130219,295.350525 C196.780777,299.827850 200.858139,302.108307 204.335327,305.068481 C205.662613,306.198425 206.439636,308.019196 207.340683,309.597473 C210.677139,315.441742 215.462708,318.577515 222.311615,319.705597 C237.473312,322.202820 252.525696,325.372040 267.605804,328.352509 C274.518066,329.718689 281.389679,331.290344 288.281464,332.760742 C293.031036,333.774078 297.947937,334.303192 302.495148,335.892517 C308.864655,338.118774 311.254669,333.726227 314.324829,329.974365 C314.908325,329.261292 315.958618,328.814056 316.881317,328.514679 C321.065674,327.157104 325.646790,326.694489 328.530365,322.633881 C328.938110,322.059723 330.437469,321.843048 331.269257,322.066132 C333.752533,322.732086 336.336121,323.374176 338.554688,324.610352 C344.741699,328.057678 348.189392,327.148163 351.125427,321.035431 C351.647247,319.949036 352.584686,318.431396 353.521606,318.277435 C359.663269,317.268341 365.857544,316.579193 371.087738,315.907227 C372.973755,313.076324 374.455902,310.350189 376.434143,308.050873 C377.856018,306.398285 379.966888,305.349579 381.722870,303.970978 C384.773682,301.575745 387.446228,298.151184 390.900391,296.950409 C395.628845,295.306702 397.103546,292.569702 394.232147,288.198975 C393.329559,286.825043 393.510620,284.658051 393.437195,282.844269 C393.369202,281.165192 394.097290,279.334076 393.650269,277.812103 C392.169250,272.769714 392.827179,270.610016 397.845123,269.048157 C401.588196,267.883148 404.013031,265.219818 403.409454,262.051300 C403.036011,260.090881 399.190186,258.840668 396.986115,257.162689 C395.570374,256.084869 393.322052,254.933670 393.152771,253.598969 C392.589996,249.162354 401.969147,243.387970 405.414459,246.184219 C410.336121,250.178619 415.502075,248.741135 421.282227,248.718445 C420.709900,246.834381 420.378937,245.432526 419.862640,244.102661 C418.183258,239.776917 417.637085,235.974533 423.533539,234.512589 C424.133057,234.363953 424.782166,233.485138 424.985779,232.816498 C426.676025,227.266541 425.085327,222.676193 420.346313,219.094208 C412.762268,213.361801 410.349701,202.056488 414.992493,194.006058 C417.466858,189.715591 415.267456,185.065674 410.539978,183.791245 C408.058380,183.122223 405.908813,181.231628 403.428711,180.544434 C400.711334,179.791504 397.180115,178.603287 395.064850,179.683334 C388.768677,182.898087 382.503448,183.323273 376.246307,180.873322 C370.708221,178.704895 367.276550,172.226669 360.224335,172.774475 C359.585205,172.824097 358.919495,171.789291 358.178192,171.450638 C357.227020,171.016129 356.207733,170.623489 355.180786,170.482483 C352.315216,170.089020 349.311829,170.239975 346.578491,169.439590 C341.157257,167.852097 335.880829,165.770081 331.393311,164.191086 C329.134369,168.939194 328.050415,173.866211 325.032990,176.814209 C322.022797,179.755112 318.110107,181.366150 317.295044,186.296432 C317.052795,187.761948 314.613708,189.640137 312.924438,189.956039 C305.695068,191.307938 298.389404,192.636856 291.069763,192.929367 C288.178436,193.044922 282.774353,190.621017 282.652161,189.034637 C282.175171,182.843430 278.010620,181.120697 273.427948,178.987198 C272.211853,182.836411 272.100952,188.211166 269.492340,190.057999 C266.781372,191.977325 261.655579,190.485748 257.293854,190.485748 C257.216400,192.132111 257.098511,194.084854 257.038300,196.039383 C256.928162,199.615921 250.634888,208.799149 247.346985,208.717773 C242.192413,208.590179 238.624115,210.978561 234.401566,213.321350 C225.728149,218.133621 224.781189,221.534943 231.977631,228.197220 C235.776672,231.714264 236.293655,235.266724 233.705978,238.180786 C232.532806,239.501953 230.721497,242.032928 231.154114,242.654327 C232.241089,244.215530 234.310425,245.444321 236.221451,246.008667 C240.495178,247.270767 242.699951,250.825531 241.582672,255.266037 C240.980667,257.658600 240.460205,260.095306 240.197495,262.543701 C239.863190,265.659210 238.609161,266.550781 235.545456,265.482391 C229.573090,263.399658 226.022980,259.163300 224.233154,253.329559 C223.060196,249.506439 220.426743,249.439407 217.145813,249.782120 C215.036224,250.002441 212.822754,249.502518 210.687302,249.140121 C206.952301,248.506271 202.759171,245.014206 200.314468,251.288498 C199.991653,252.117035 198.036606,252.501602 196.771957,252.731766 C194.016647,253.233185 191.162170,254.048965 188.449265,253.766373 C179.593628,252.843857 174.571060,260.521759 167.196869,262.814362 C166.842804,262.924469 166.709274,263.658539 166.415070,264.059479 C162.714417,269.102509 144.694672,270.989746 140.051331,266.808289 C139.696091,266.488403 139.492981,265.994171 139.237259,265.570038 C137.288055,262.337616 134.375824,261.495728 130.763824,261.797699 C127.800461,262.045410 124.799904,261.848206 121.418976,261.848206 C122.680946,269.222748 116.903244,273.245361 112.354889,277.910431 C110.374100,279.942078 106.308098,278.973358 105.024254,276.485748 C102.903267,272.376007 100.810875,268.240234 98.442535,264.272980 C96.576935,261.147888 87.027763,259.776947 83.806641,261.449158 C79.448891,263.711395 79.758728,267.440308 79.913033,272.157959"

  return (
    <div className={`${playfair.variable} ${dmSans.variable} ${styles.page}`}>

      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <a href="#" className={styles.navLogo}>
          <img src="/complianceflow-logo.svg" style={{height:'22px', width:'auto', display:'block'}} alt="ComplianceFlow" />
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#features">Funktionen</a></li>
          <li><a href="#workflow">Ablauf</a></li>
          <li><a href="#pricing">Preise</a></li>
          <li><a href="mailto:info@vetron.at">Kontakt</a></li>
          <li>
            <button onClick={openModal} className={styles.navCta}>Demo anfragen</button>
          </li>
        </ul>
        <button
          className={styles.navHamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>
      {menuOpen && (
        <div className={styles.navMobileOpen}>
          <a href="#features" className={styles.navMobileLink} onClick={() => setMenuOpen(false)}>Funktionen</a>
          <a href="#workflow" className={styles.navMobileLink} onClick={() => setMenuOpen(false)}>Ablauf</a>
          <a href="#pricing" className={styles.navMobileLink} onClick={() => setMenuOpen(false)}>Preise</a>
          <a href="mailto:info@vetron.at" className={styles.navMobileLink} onClick={() => setMenuOpen(false)}>Kontakt</a>
          <button onClick={() => { openModal(); setMenuOpen(false) }} className={styles.navMobileCta}>Demo anfragen</button>
        </div>
      )}

      {/* HERO */}
      <div className={styles.heroNew}>
        <div className={styles.heroCenter}>

          <h1 className={`${styles.heroHeadlineNew} ${styles.fuBase}`}>
            Compliance. Automatisch.<br />
            <em>Erledigt.</em>
          </h1>

          <p className={`${styles.heroSubNew} ${styles.fuBase} ${styles.fuD1}`}>
            Wöchentliche CE-Dokumentenanforderung bei Ihren Lieferanten —
            vollständig automatisiert, ohne manuelle Nachverfolgung.
          </p>

          <div className={`${styles.heroActionsNew} ${styles.fuBase} ${styles.fuD2}`}>
            <button onClick={openModal} className={styles.btnPrimary}>
              Demo anfragen
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href="#workflow" className={styles.btnGhost}>Ablauf ansehen</a>
          </div>

          {/* Interactive Timeline */}
          <div
            className={styles.tlWrap}
            onMouseLeave={() => setTlActive(2)}
          >
            <div className={styles.tlTrack} />
            <div
              className={styles.tlFill}
              style={{ width: tlActive === 0 ? '0%' : `${(tlActive / (TIMELINE_NODES.length - 1)) * 88 + 6}%` }}
            />
            <div className={styles.tlNodes}>
              {TIMELINE_NODES.map((node, i) => (
                <div
                  key={i}
                  className={[
                    styles.tnode,
                    tlActive > i  ? styles.tnodeLit    : '',
                    tlActive === i ? styles.tnodeActive : '',
                  ].join(' ')}
                  onMouseEnter={() => setTlActive(i)}
                >
                  <div className={styles.tdot} />
                  <div className={styles.tday}>{node.day}</div>
                  <div className={styles.tlabel}>{node.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats bar */}
        <div className={styles.heroSbar}>
          <div className={styles.heroScol}>
            <div className={styles.heroSnum}>90<b>%</b></div>
            <div className={styles.heroSlabel}>Email-Trefferquote</div>
          </div>
          <div className={styles.heroScol}>
            <div className={styles.heroSnum}>~0<b>h</b></div>
            <div className={styles.heroSlabel}>Manuelle Arbeit</div>
          </div>
          <div className={styles.heroScol}>
            <div className={styles.heroSnum}>100<b>%</b></div>
            <div className={styles.heroSlabel}>DSGVO-konform</div>
          </div>
          <div className={`${styles.heroScol} ${styles.heroScolAt}`}>
            <svg width="82" height="44" viewBox="65 155 375 200" fill="none">
              <path d={AUSTRIA_PATH + ' z'} fill="#E0DFD9" stroke="rgba(26,26,24,0.1)" strokeWidth="1.3" />
            </svg>
            <span className={styles.heroAtLabel}>Developed in Austria</span>
          </div>
        </div>
      </div>

      {/* BENTO FEATURES */}
      <section id="features" className={styles.section}>
        <div className={styles.bentoHeader}>
          <div>
            <p className={styles.sectionLabel}>Funktionen</p>
            <h2 className={styles.sectionHeadline}>Alles, was Ihr Compliance-Team braucht.</h2>
          </div>
          <p className={styles.sectionSub}>Von der Excel-Liste bis zum vollständigen Audit Trail — ComplianceFlow bildet den gesamten Dokumentenprozess ab.</p>
        </div>

        <div className={styles.bentoGrid}>

          {/* WIDE: KI Scan */}
          <div className={`${styles.bentoCard} ${styles.bcScan}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusScanWrapper}>
                <div className={styles.illusDocs}>
                  {[
                    [24, 18, 22],
                    [22, 16, 20],
                    [26, 14, 22],
                  ].map((widths, i) => (
                    <div key={i} className={styles.illusDoc}>
                      <div className={styles.illusDocLines}>
                        {widths.map((w, j) => (
                          <div key={j} className={styles.illusDocLine} style={{ width: w }} />
                        ))}
                      </div>
                      <div className={styles.illusScanBeam} style={{ animationDelay: `${i * 0.3}s` }} />
                    </div>
                  ))}
                </div>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" style={{ margin: '0 8px', opacity: 0.3 }}>
                  <path d="M4 8h12M12 4l4 4-4 4" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={styles.illusBadges}>
                  <span className={styles.badgeCe}>CE</span>
                  <span className={styles.badgeTdb}>TDB</span>
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>KI-Kategorisierung in Sekunden</div>
            <div className={styles.bentoDesc}>Claude analysiert jeden Artikel automatisch — CE-Konformitätserklärung oder Sicherheitsdatenblatt. 100% Genauigkeit in Tests, keine manuelle Vorsortierung.</div>
          </div>

          {/* TALL ACCENT: Weekly cycle */}
          <div className={`${styles.bentoCard} ${styles.bentoAccent} ${styles.bcCycle}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusClockWrap}>
                <div className={styles.illusClockFace} />
                <div className={styles.illusClockHour} />
                <div className={styles.illusClockMin} />
                <div className={styles.illusClockCenter} />
              </div>
            </div>
            <div className={styles.bentoTitle}>Wöchentlicher Automatik-Zyklus</div>
            <div className={styles.bentoDesc}>Montag Upload, Freitag Abgleich — vollständig automatisiert, mit Eskalation bei ausbleibenden Antworten.</div>
            <div className={styles.weekPills}>
              {['Mo', 'Di', 'Mi', 'Do', 'Fr'].map((d) => (
                <span key={d} className={`${styles.weekPill} ${(d === 'Mo' || d === 'Fr') ? styles.weekPillActive : ''}`}>{d}</span>
              ))}
            </div>
          </div>

          {/* SQUARE: Email Finder */}
          <div className={`${styles.bentoCard} ${styles.bcEmail}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusAtWrap}>
                <div className={styles.illusAt}>
                  <span className={styles.illusAtSymbol}>@</span>
                  <div className={styles.illusAtScan} />
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>Email-Finder</div>
            <div className={styles.bentoDesc}>
              Findet automatisch die Compliance-Abteilung des Lieferanten.
            </div>
            <span className={styles.illusPctBadge}>90% Trefferquote</span>
          </div>

          {/* SQUARE: Gmail */}
          <div className={`${styles.bentoCard} ${styles.bcGmail}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusInboxWrap}>
                <div className={styles.illusPdfDoc}>
                  <span className={styles.illusPdfLabel}>PDF</span>
                </div>
                <div className={styles.illusTray} />
              </div>
            </div>
            <div className={styles.bentoTitle}>Gmail-Integration</div>
            <div className={styles.bentoDesc}>
              Eingehende PDFs werden gelesen und via KI dem richtigen Artikel zugeordnet.
            </div>
          </div>

          {/* WIDE: Article memory */}
          <div className={`${styles.bentoCard} ${styles.bcMemory}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusMemGrid}>
                <div className={styles.illusMemRow}>
                  {[1, 0.6, 0.6, 1, 1, 0.4].map((op, i) => (
                    <div key={i} className={styles.illusMemCell} style={{ opacity: op }} />
                  ))}
                </div>
                <div className={styles.illusMemRow}>
                  {[1, 1, 0.5, 0.3].map((op, i) => (
                    <div key={i} className={styles.illusMemCell} style={{ opacity: op }} />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>Artikel-Gedächtnis — 60 Tage</div>
            <div className={styles.bentoDesc}>Einmal gefundene Supplier-Daten werden gecacht — keine doppelte Suche, kein redundanter Aufwand beim nächsten Zyklus. Spart API-Kosten und Zeit.</div>
          </div>

          {/* SQUARE: Audit trail */}
          <div className={`${styles.bentoCard} ${styles.bcAudit}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusBars}>
                {[12, 18, 14, 22, 28].map((h, i) => (
                  <div key={i} className={styles.illusBar} style={{ height: h }} />
                ))}
              </div>
            </div>
            <div className={styles.bentoTitle}>Audit Trail</div>
            <div className={styles.bentoDesc}>Lückenloser Nachweis für Ihr QM — jederzeit exportierbar.</div>
          </div>

        </div>
      </section>

      {/* ABLAUF */}
      <section id="workflow" style={{ background: '#F8F7F4' }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Header */}
          <p style={{ color: '#1B5E20', letterSpacing: '0.12em', fontSize: 11, fontWeight: 600 }} className="uppercase mb-3">
            ABLAUF
          </p>
          <h2 style={{ fontFamily: 'Georgia, serif', color: '#0D1B2A', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, lineHeight: 1.2 }} className="mb-3 max-w-2xl">
            Von der Excel-Datei zur vollständigen Dokumentation.
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16 }} className="mb-12">
            Der gesamte Compliance-Prozess — vollautomatisch, jede Woche.
          </p>

          {/* macOS Window */}
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #C8C5BF', boxShadow: '0 2px 40px rgba(0,0,0,0.08)' }}>

            {/* Menubar */}
            <div style={{ background: '#E4E4E2', borderBottom: '1px solid #D0CEC9' }} className="flex items-center justify-between px-4 h-8">
              <div className="flex items-center gap-5">
                <svg width="13" height="16" viewBox="0 0 13 16" fill="#555" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 11.7c-.28.67-.6 1.28-1 1.84-.5.77-1 1.46-1.8 1.48-.72 0-1.08-.43-2-.43-.94 0-1.33.43-2.06.43-.78-.01-1.3-.73-1.8-1.5C2.55 12 1.75 9.23 1.75 8.15c0-2.73 1.78-4.18 3.54-4.18.87 0 1.6.5 2.15.5.52 0 1.45-.57 2.52-.5.43.01 1.65.2 2.43 1.16-.07.05-1.45.9-1.43 2.56.02 1.96 1.73 2.58 1.73 2.58-.04.27-.28.9-.64 1.43zm-3-9.82C9.02.9 9.48 0 10.5 0c-.1.93-.5 1.82-1.05 2.45-.53.63-1.38 1.1-2.1 1.05.08-.75.47-1.5 1.15-2.12" />
                </svg>
                <div className="flex items-center gap-4">
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>ComplianceFlow</span>
                  {['Datei', 'Bearbeiten', 'Ansicht'].map(item => (
                    <span key={item} style={{ fontSize: 13, color: '#555' }}>{item}</span>
                  ))}
                </div>
              </div>
              <span style={{ fontSize: 12, color: '#888' }}>compliance@vetron.at | Mo 04. Mai · 09:41</span>
            </div>

            {/* Titlebar */}
            <div style={{ background: '#EDECEA', borderBottom: '1px solid #D8D5D0' }} className="flex items-center px-4 h-10 relative">
              <div className="flex items-center gap-[7px] z-10">
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FF5F56' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#27C93F' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span style={{ fontSize: 12, color: '#888' }}>app.vetron.at — ComplianceFlow</span>
              </div>
            </div>

            {/* Video Player */}
            <div style={{ position: 'relative', aspectRatio: '1300/770', background: '#0C150C', overflow: 'hidden' }}>
              <video
                ref={videoRef}
                src="https://pub-6f2a71a95fcc499a8424edf78ab6fabb.r2.dev/CFDemoLoop3.mp4"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                playsInline
                preload="metadata"
                onTimeUpdate={e => setActiveIcon(getActiveChapter((e.target as HTMLVideoElement).currentTime))}
                onEnded={() => setVideoClicked(false)}
              />
              {!videoClicked && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(12,21,12,0.55)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <button
                    onClick={() => {
                      setVideoClicked(true)
                      videoRef.current?.play()
                    }}
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.35)',
                      background: 'rgba(27,94,32,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 4 }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    DEMO ANSEHEN · 30 SEK
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Icons row */}
          <div className="flex justify-center gap-4 mt-7">
            {[
              {
                label: 'Upload',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 9h18M9 5V3M15 5V3" />
                  </svg>
                ),
              },
              {
                label: 'KI & Email',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                    <path d="M19 3L19.5 4.5L21 5L19.5 5.5L19 7L18.5 5.5L17 5L18.5 4.5L19 3Z" />
                  </svg>
                ),
              },
              {
                label: 'Versand',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="14" rx="2" />
                    <path d="M2 10l10 6 10-6" />
                  </svg>
                ),
              },
              {
                label: 'Abgleich',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12l3 3 5-5" />
                  </svg>
                ),
              },
            ].map((item, i) => {
              const isActive = videoClicked && activeIcon === i
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = VIDEO_CHAPTERS[i].start
                      if (!videoClicked) {
                        setVideoClicked(true)
                        videoRef.current.play()
                      }
                    }
                  }}
                >
                  <div
                    style={{
                      width: 66,
                      height: 66,
                      borderRadius: 18,
                      border: isActive ? '1px solid #1B5E20' : '1px solid #D0CEC9',
                      background: isActive ? '#1B5E20' : '#ECEAE6',
                      color: isActive ? '#fff' : '#666',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      color: isActive ? '#1B5E20' : '#aaa',
                      fontWeight: isActive ? 500 : 400,
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className={styles.section}>
        <div className={styles.pricingHead}>
          <p className={styles.sectionLabel}>Preise</p>
          <h2 className={styles.sectionHeadline}>Transparent. Skalierbar.</h2>
          <p className={styles.sectionSub}>Alle Pläne inklusive Setup, Support und monatlicher Kündigung.</p>
        </div>
        <div className={styles.pricingGrid}>

          {/* Starter */}
          <div className={styles.pricingCard}>
            <div className={styles.pTier}>Starter</div>
            <div className={styles.pPrice}>€399</div>
            <div className={styles.pPeriod}>pro Monat, zzgl. MwSt.</div>
            <hr className={styles.pDivider} />
            <ul className={styles.pFeatures}>
              {['Bis zu 50 Lieferanten/Monat', 'CE & TDB Kategorisierung', 'Email-Finder + Auto-Versand', 'Wochenbericht (Excel)', 'Email-Support'].map(f => (
                <li key={f} className={styles.pFeature}><CheckIcon />{f}</li>
              ))}
            </ul>
            <a href="mailto:info@vetron.at" className={`${styles.pCta} ${styles.pCtaOutline}`}>Jetzt starten</a>
          </div>

          {/* Professional */}
          <div className={`${styles.pricingCard} ${styles.pricingFeatured}`}>
            <div className={styles.pricingBadge}>Beliebtester Plan</div>
            <div className={styles.pTier}>Professional</div>
            <div className={styles.pPrice}>€699</div>
            <div className={styles.pPeriod}>pro Monat, zzgl. MwSt.</div>
            <hr className={styles.pDivider} />
            <ul className={styles.pFeatures}>
              {['Unbegrenzte Lieferanten', 'Gmail-Integration (automatisch)', 'KI PDF-Matching & Zuordnung', 'Artikel-Gedächtnis (60 Tage)', 'Eskalations-Automatik', 'Priority-Support (24h)'].map(f => (
                <li key={f} className={styles.pFeature}><CheckIcon color="#4ADE80" />{f}</li>
              ))}
            </ul>
            <button onClick={openModal} className={`${styles.pCta} ${styles.pCtaWhite}`}>Demo anfragen</button>
          </div>

          {/* Enterprise */}
          <div className={styles.pricingCard}>
            <div className={styles.pTier}>Enterprise</div>
            <div className={styles.pPrice} style={{ fontSize: 28, paddingTop: 6, letterSpacing: '-0.01em' }}>Auf Anfrage</div>
            <div className={styles.pPeriod}>individuelles Angebot</div>
            <hr className={styles.pDivider} />
            <ul className={styles.pFeatures}>
              {['Alles aus Professional', 'Multi-Mandanten', 'ERP-Integration auf Anfrage', 'Dedizierter Account Manager', 'SLA-Garantie'].map(f => (
                <li key={f} className={styles.pFeature}><CheckIcon />{f}</li>
              ))}
            </ul>
            <a href="mailto:info@vetron.at" className={`${styles.pCta} ${styles.pCtaOutline}`}>Kontakt aufnehmen</a>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <div className={styles.ctaWrap}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>
            Bereit, Compliance endlich <em>automatisch</em> zu machen?
          </h2>
          <div className={styles.ctaBtns}>
            <button onClick={openModal} className={styles.btnPrimary} style={{ fontSize: 15, padding: '14px 30px' }}>
              Demo anfragen
            </button>
            <span className={styles.ctaNote}>Kostenlose Erstberatung · Keine Bindung</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerBrand}>Compliance<span>Flow</span></span>
          <span className={styles.footerCopy}>by Vetron · © 2026</span>
        </div>
        <ul className={styles.footerLinks}>
          <li><a href="https://vetron.at">vetron.at</a></li>
          <li><a href="mailto:info@vetron.at">info@vetron.at</a></li>
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutz</a></li>
        </ul>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
          <div className={styles.modalBox}>
            <button className={styles.modalClose} onClick={closeModal}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {formState === 'success' ? (
              <div className={styles.modalSuccess}>
                <div className={styles.modalSuccessIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L19 7" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.modalSuccessTitle}>Anfrage gesendet!</div>
                <div className={styles.modalSuccessText}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen. Wir freuen uns auf das Gespräch.
                </div>
                <button className={styles.btnPrimary} onClick={() => { setShowModal(false); setFormState('idle') }}>
                  Schließen
                </button>
              </div>
            ) : (
              <>
                <div className={styles.modalEyebrow}>Kontakt</div>
                <h2 className={styles.modalHeadline}>Demo anfragen</h2>
                <p className={styles.modalSub}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

                <form className={styles.modalForm} onSubmit={handleSubmit}>
                  <div className={styles.modalRow}>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Firma <span style={{ color: '#EF4444' }}>*</span></label>
                      <input
                        className={styles.modalInput}
                        placeholder="Mustermann GmbH"
                        value={formData.firma}
                        onChange={e => setFormData(p => ({ ...p, firma: e.target.value }))}
                        required
                      />
                    </div>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Name <span style={{ color: '#EF4444' }}>*</span></label>
                      <input
                        className={styles.modalInput}
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.modalRow}>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Email <span style={{ color: '#EF4444' }}>*</span></label>
                      <input
                        type="email"
                        className={styles.modalInput}
                        placeholder="max@mustermann.at"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Telefon <span className={styles.modalLabelOptional}>(optional)</span></label>
                      <input
                        className={styles.modalInput}
                        placeholder="+43 1 234 5678"
                        value={formData.telefon}
                        onChange={e => setFormData(p => ({ ...p, telefon: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className={styles.modalField}>
                    <label className={styles.modalLabel}>Nachricht <span className={styles.modalLabelOptional}>(optional)</span></label>
                    <textarea
                      className={`${styles.modalInput} ${styles.modalTextarea}`}
                      placeholder="Beschreiben Sie kurz Ihren Anwendungsfall..."
                      value={formData.nachricht}
                      onChange={e => setFormData(p => ({ ...p, nachricht: e.target.value }))}
                    />
                  </div>

                  <hr className={styles.modalDivider} />

                  <div className={styles.modalSubmit}>
                    <span className={styles.modalNote}>
                      Ihre Daten werden vertraulich behandelt<br />und nicht an Dritte weitergegeben.
                    </span>
                    <button
                      type="submit"
                      className={styles.btnPrimary}
                      disabled={formState === 'loading'}
                    >
                      {formState === 'loading' ? 'Wird gesendet...' : 'Anfrage senden →'}
                    </button>
                  </div>

                  {formState === 'error' && (
                    <p style={{ fontSize: 13, color: '#EF4444', textAlign: 'center' }}>
                      Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@vetron.at
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
