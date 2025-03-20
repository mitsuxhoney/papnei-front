import { Users, Award, Heart, Shield, Section } from 'lucide-react'
import { AboutImageSlider } from '../../components/AboutImageSlider'
import Wrapper from '../../components/Wrapper'
import { NumberTicker } from '@/components/ui/number-ticker'
import { Connect } from '../../components/ui/new-cta'
import { FAQCTA } from '../../components/faq-cta'
import { Card } from '../../components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Logos3 as Partners } from '../../components/ui/logos3'
import { Icons } from '@/components/ui/icons'

const insightsArray = [
  {
    id: 1,
    heading:
      '"Integration of Trustfulls identity scoring algorithms in our AML/KYC process allowed our bank to tap into alternative data sources to identify suspicious behavior."',
    user: {
      name: 'Luca Crivellari',
      position:
        'Head of Corporate Security & Anti Financial Crime, Banca Sella',
    },
    logo: (
      <svg
        width="133"
        height="90"
        viewBox="0 0 133 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_255_21279)">
          <path
            d="M109.06 59.1822C108.221 60.2555 106.062 62.3035 101.954 62.3035C97.1546 62.3035 93.8236 59.3056 93.8236 55.037C93.8236 50.3613 97.1916 48.4614 100.93 47.2894L106.469 45.5622V50.46L102.916 51.8541C101.621 52.4092 101.028 53.2975 101.028 54.3708C101.028 55.5428 102.052 57.122 104.446 57.122C107.357 57.122 109.047 55.111 109.047 52.5449V44.9947C109.047 42.8851 107.752 41.5897 105.161 41.5897C101.744 41.5897 100.967 43.724 100.967 45.2291H94.3664C94.3664 39.5418 98.4253 35.9517 105.383 35.9517C112.341 35.9517 116.042 38.7029 116.042 44.4395V61.9704H109.035V59.1699L109.06 59.1822ZM83.954 27.4639H90.9244V61.9704H83.954V27.4639ZM73.1962 27.4639H80.1665V61.9704H73.1962V27.4639ZM55.3816 46.5738H62.8948C62.7097 43.724 60.8222 41.8241 58.2437 41.8241C55.6653 41.8241 52.8031 43.7363 52.8031 49.0166V49.7198C52.9018 53.5072 54.5673 56.3447 58.3794 56.3447C61.0566 56.3447 62.574 54.852 63.0798 53.3468L69.31 55.3578C68.2367 58.5284 65.0661 62.3158 58.0093 62.3158C50.3481 62.3158 45.586 56.5791 45.586 49.6334C45.586 41.6514 50.3357 35.964 58.0834 35.964C66.3368 35.964 69.9885 41.9845 69.9885 49.2016V51.1632H55.3692V46.5738H55.3816ZM17.3713 51.2989H24.9339V52.2365C24.9339 55.3578 27.389 56.6655 30.6089 56.6655C34.347 56.6655 35.6424 55.1234 35.6424 53.1618C35.6424 51.1015 33.6561 50.3119 30.4239 49.325L26.9202 48.2517C21.9484 46.7096 18.1116 44.6986 17.9758 39.0606C17.9758 33.7434 21.6646 28.8456 30.757 28.8456C38.7883 28.8456 42.8472 32.4357 42.8472 38.3204V39.3074H35.9261V38.5671C35.9261 35.9024 34.162 34.5083 30.6089 34.5083C27.5123 34.5083 25.6248 35.9517 25.6248 37.9626C25.6248 39.4061 26.1799 40.6644 29.5109 41.7007L34.5938 43.2429C39.8123 44.822 43.4887 47.0303 43.4887 52.6683C43.4887 58.3063 39.2448 62.4762 30.6583 62.4762C20.5666 62.4639 17.3713 57.2083 17.3713 52.2489V51.2989Z"
            fill="#151515"
          />
        </g>
        <defs>
          <clipPath id="clip0_255_21279">
            <rect
              width="132"
              height="89.78"
              fill="white"
              transform="translate(0.719238 0.0742188)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    heading:
      '"Leveraging Trustfulls AI-driven risk analysis helped our institution detect fraud attempts more efficiently, reducing false positives and improving operational efficiency in compliance procedures."',
    user: {
      name: 'Sophie Tremblay',
      position: 'Chief Risk Officer, Banque Nationale',
    },
    logo: (
      <svg
        width="133"
        height="90"
        viewBox="0 0 133 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_255_21283)">
          <path
            d="M56.3222 46.9489C56.1231 47.654 55.8312 48.226 55.3369 48.6681C54.7966 49.1931 54.0289 49.6308 53.0906 49.7933C52.6424 49.8785 52.3197 49.9211 51.8069 49.9211C48.4103 49.9211 46.6749 47.5569 46.6749 44.4025C46.6749 41.2468 48.3315 38.7311 51.7259 38.7311C52.8874 38.7311 53.7687 38.9712 54.5199 39.4176C55.3587 39.912 55.9777 40.6772 56.2478 41.0723L58.4842 39.9938C57.0963 37.9102 54.9126 37.0458 52.0945 37.0458C47.1911 37.0458 44.1016 39.8039 44.1016 44.3752C44.1016 48.7565 46.7842 51.6489 51.8506 51.6489C55.2516 51.6489 58.6274 50.2431 59.0112 46.9491L56.3222 46.9489ZM66.5152 42.2245C63.964 42.2245 62.3148 43.807 62.3148 46.2554C62.3148 48.7037 63.964 50.2864 66.5154 50.2864C69.0677 50.2864 70.7167 48.7037 70.7167 46.2554C70.7167 43.8072 69.0675 42.2245 66.5152 42.2245ZM66.5152 51.8035C62.3543 51.8035 60.0621 49.8334 60.0621 46.2554C60.0621 42.7287 62.4143 40.7073 66.5152 40.7073C70.6761 40.7073 72.9694 42.6774 72.9694 46.2553C72.9694 49.8334 70.6761 51.8035 66.5152 51.8035ZM77.7189 51.4182H75.5886V42.6108H72.9247V41.0925H75.5886V40.5534C75.5886 37.7537 76.7445 36.505 79.3374 36.505C79.9409 36.505 80.6365 36.5507 81.1964 36.6272L81.2565 36.637V38.1596L81.1757 38.1455C80.9208 38.0997 80.4144 38.0243 79.8667 38.0243C78.3214 38.0243 77.7189 38.6476 77.7189 40.2477V41.0925H80.993V42.6108H77.7189V51.4182ZM103.205 38.7956H101.075V36.6267H103.205V38.7956ZM103.205 51.4182H101.075V42.0498L103.109 41.0925H103.205V51.4182ZM84.8964 38.7956H82.7651V36.6267H84.8964V38.7956ZM84.8966 51.4182H82.7653V42.0695L84.8966 41.0597V51.4182ZM110.253 51.8037C107.613 51.8037 105.826 50.9787 105.222 49.4788L105.198 49.4189L107.253 48.4451L107.269 48.5347C107.472 49.7135 108.521 50.2865 110.476 50.2865C112.582 50.2865 113.743 49.684 113.743 48.5904C113.743 47.62 112.236 47.382 110.493 47.1081C108.147 46.7393 105.486 46.321 105.486 43.9623C105.486 41.894 107.32 40.7063 110.517 40.7063C112.234 40.7063 114.449 41.0403 115.254 42.6317L115.286 42.6951L113.414 43.5814L113.386 43.5126C113.049 42.634 112.164 42.2247 110.599 42.2247C108.816 42.2247 107.619 42.8175 107.619 43.6982C107.619 44.375 108.272 44.7984 109.737 45.0724L113.113 45.7C115.105 46.0809 115.995 46.928 115.995 48.4473C115.995 50.7056 114.117 51.8037 110.253 51.8037ZM92.7877 42.2245C90.384 42.2245 88.8313 43.807 88.8313 46.2554C88.8313 48.7037 90.384 50.2864 92.7877 50.2864C95.1914 50.2864 96.744 48.7037 96.744 46.2554C96.744 43.8072 95.1914 42.2245 92.7877 42.2245ZM92.3404 51.8035C89.0554 51.8035 86.5784 49.4185 86.5784 46.2554C86.5784 43.0922 89.0554 40.7073 92.3404 40.7073C94.2094 40.7073 95.6517 41.2376 96.7442 42.3304V37.5834L98.7781 36.6272H98.8745V48.9558C98.8745 49.6173 98.9116 50.4293 98.9565 51.3462L98.9608 51.4182H96.8328L96.8262 51.356C96.7901 50.9685 96.7529 50.5538 96.7453 50.0855C95.7053 51.1793 94.112 51.8035 92.3404 51.8035ZM58.6314 33.6304C58.5012 33.5113 58.7122 32.6906 58.9584 31.8894C60.3668 27.5408 67.4837 19.9405 68.6112 19.3773C69.1175 19.1242 66.8067 23.022 64.5103 27.1293C63.1937 29.487 58.9069 33.8148 58.6422 33.625C58.638 33.6227 58.6347 33.6292 58.6314 33.6304Z"
            fill="#151515"
          />
          <path
            d="M51.8085 76.9901C51.6587 77.1092 51.4038 76.2239 51.3 75.5701C50.1933 68.6195 49.7416 58.687 51.6696 55.9703C51.7003 55.9288 51.7296 55.8971 51.7615 55.8721C51.8676 55.787 51.9987 55.7717 52.1136 55.8306C52.2579 55.9047 52.8976 56.2245 53.2432 60.3952C53.4412 62.7964 53.3505 64.998 53.2005 66.7695C52.8824 70.5537 52.3158 76.584 51.8085 76.9901ZM28.8953 57.1579C28.6404 57.1393 29.0933 56.6886 29.0933 56.6886C33.6926 52.5113 37.7465 50.9015 39.8932 50.9015C40.0714 50.9015 40.2288 50.9156 40.359 50.943C40.558 50.9854 40.6969 51.0586 40.7692 51.1569C41.001 51.2529 41.0435 51.4297 41.0513 51.5071C41.0742 51.7582 41.7512 52.2384 36.6321 54.6944C34.9186 55.5161 29.4704 57.1992 28.8953 57.1579ZM42.9036 38.6318H42.9024C38.1541 38.2399 33.0505 32.1276 30.0017 28.4755C29.2121 27.5302 27.9522 26.1004 28.043 25.9334C28.0737 25.8756 28.171 25.8527 28.3624 25.8952C29.2 26.0808 34.2884 28.7167 37.3262 31.1269C37.3985 31.1835 44.4421 36.9431 43.9587 38.325C43.9062 38.4746 43.7618 38.6526 43.3715 38.6514C43.2184 38.6514 43.0598 38.6448 42.9034 38.6317M32.4855 46.2694C30.9535 46.2694 28.0238 46.1034 26.5989 46.0553C23.9241 45.9637 16.6247 45.3777 17.0193 44.8973C17.3496 44.4968 24.5496 42.9151 30.9546 42.9151C33.4162 42.9151 35.7128 43.02 37.7806 43.2264C40.753 43.5243 41.3905 44.1792 41.5162 44.3725C41.5477 44.4211 41.5677 44.4762 41.5747 44.5337C41.5817 44.5911 41.5755 44.6494 41.5566 44.7042C41.4461 45.0447 40.9071 45.264 40.8459 45.2881C39.1388 45.9571 36.4815 46.2694 32.4855 46.2694ZM64.4329 66.2686C62.3069 64.5701 57.3913 57.4251 56.651 54.1355C56.5405 53.6421 56.7154 53.486 56.7571 53.4369C56.8204 53.3617 56.909 53.318 57.0062 53.3124H57.014C57.1682 53.3124 57.4154 53.3355 58.9453 55C61.035 57.2735 62.8307 60.4749 63.7154 62.1798C64.4655 63.6282 65.7505 66.4726 65.5995 67.0118C65.5437 67.2127 64.4327 66.2684 64.4327 66.2684M53.5453 34.3098C53.4849 34.2979 53.4289 34.2695 53.3835 34.228C53.2784 34.1341 53.0848 33.9605 53.1056 31.3487C53.1493 25.4196 56.1227 17.3131 56.8117 16.5087C56.8958 16.4105 56.9452 16.3134 57.0042 16.3242C57.1453 16.3527 57.1507 16.4586 57.1704 16.6671C57.7653 24.876 55.8046 31.7819 54.2419 33.8557C53.9827 34.2028 53.7542 34.3513 53.5453 34.3098ZM46.4945 33.7807L46.3995 33.7315C46.2879 33.6748 43.6338 32.257 40.6888 25.2638C38.6121 20.3347 37.6706 17.2512 37.1664 15.4916C36.577 13.4321 36.32 12.226 36.5902 12.0065C36.6491 11.9586 36.8799 12.2086 36.9301 12.2675C37.2003 12.5829 38.1081 13.4998 42.6955 21.7797C46.524 28.6922 47.3311 32.0355 47.3179 32.7403C47.308 33.3496 46.6192 33.7152 46.5897 33.7317L46.4945 33.7807ZM35.1628 66.7529C37.2263 63.4196 38.3876 60.1396 42.3616 55.6295C44.3211 53.4063 46.0797 52.9085 46.377 52.9413C46.4514 52.95 46.5181 52.9762 46.5783 53.0177C46.9436 53.2775 46.7905 53.9945 46.7642 54.0742C45.451 57.9819 41.8487 62.8455 39.6397 65.4782C36.5493 69.1619 32.5106 72.9449 32.3686 72.4909C32.2275 72.0369 34.0122 68.6107 35.1626 66.7531"
            fill="#151515"
          />
        </g>
        <defs>
          <clipPath id="clip0_255_21283">
            <rect
              width="132"
              height="89.78"
              fill="white"
              transform="translate(0.719238 0.0742188)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    heading:
      '"Trustfulls real-time behavioral analytics provided deeper insights into customer activities, strengthening our fraud detection mechanisms while enhancing the customer onboarding experience."',
    user: {
      name: 'Carlos Fernandez',
      position: 'Director of Fraud Prevention, BBVA',
    },
    logo: (
      <svg
        width="133"
        height="90"
        viewBox="0 0 133 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_255_21288)">
          <path
            d="M48.7945 42.3116H46.9634V39.8568H48.7945C48.7945 36.5232 49.9629 35.4971 53.2029 35.4971C53.8067 35.4971 54.4302 35.5462 55.034 35.5658V38.2465C54.6757 38.1974 54.3418 38.1777 54.0031 38.1777C53.1341 38.1777 52.5892 38.2857 52.5892 39.3364V39.8519H54.872V42.3067H52.5991V51.4533H48.7994V42.3116H48.7945Z"
            fill="#151515"
          />
          <path
            d="M54.3038 43.4306C54.3725 41.9086 55.0843 40.9267 56.1153 40.3228C57.1462 39.7386 58.4864 39.5127 59.802 39.5127C62.5512 39.5127 65.2119 40.1166 65.2119 43.4011V48.4826C65.2119 49.4694 65.2119 50.5397 65.6586 51.4578H61.8393C61.7019 51.0994 61.6626 50.7459 61.6135 50.3679C60.6268 51.3989 59.1786 51.8014 57.7942 51.8014C55.5802 51.8014 53.8374 50.6821 53.8374 48.2911C53.8374 44.5107 57.9513 44.8004 60.5924 44.2652C61.2454 44.1277 61.5988 43.9068 61.5988 43.195C61.5988 42.3259 60.5482 41.9872 59.7677 41.9872C58.7171 41.9872 58.0445 42.4536 57.8678 43.4404C57.8629 43.4306 54.3038 43.4306 54.3038 43.4306ZM59.2179 49.4498C61.0294 49.4498 61.6332 48.4188 61.5497 46.0278C61.0146 46.3616 60.0279 46.4254 59.1982 46.6513C58.3489 46.8575 57.6273 47.206 57.6273 48.1242C57.6371 49.0668 58.3686 49.4498 59.2179 49.4498Z"
            fill="#151515"
          />
          <path
            d="M73.4888 44.1031C73.4691 43.1163 72.5904 42.424 71.638 42.424C69.5124 42.424 69.1835 44.2357 69.1835 45.8461C69.1835 47.3484 69.8364 48.89 71.4466 48.89C72.7622 48.89 73.4348 48.129 73.6116 46.9016H77.3082C76.9743 50.0094 74.559 51.7965 71.4712 51.7965C67.9808 51.7965 65.3887 49.4104 65.3887 45.851C65.3887 42.1639 67.7402 39.5225 71.4712 39.5225C74.3577 39.5225 76.9301 41.0444 77.1952 44.1031H73.4888Z"
            fill="#151515"
          />
          <path
            d="M81.3321 38.4036H77.5325V35.4971H81.3321V38.4036ZM77.5325 39.8568H81.3321V51.468H77.5325V39.8568Z"
            fill="#151515"
          />
          <path
            d="M82.3701 35.4971H86.1698V51.468H82.3701V35.4971Z"
            fill="#151515"
          />
          <path
            d="M90.3017 46.5825C90.3704 48.1732 91.2884 49.2238 92.894 49.2238C93.812 49.2238 94.7052 48.7967 95.0689 47.9474H98.6275C97.9356 50.628 95.4517 51.7965 92.8543 51.7965C89.0746 51.7965 86.5071 49.5135 86.5071 45.6252C86.5071 42.0657 89.3447 39.5225 92.7664 39.5225C96.929 39.5225 99.006 42.6499 98.8288 46.5923H90.3017V46.5825ZM95.0193 44.4664C94.9505 43.1703 94.0325 42.0951 92.7565 42.0951C91.4111 42.0951 90.5228 43.0623 90.3017 44.4664H95.0193Z"
            fill="#151515"
          />
          <path
            d="M99.1116 47.3047H103.275V51.4677H99.1116V47.3047Z"
            fill="#151515"
          />
          <path
            d="M108.15 38.4036H104.35V35.4971H108.15V38.4036ZM104.345 39.8568H108.145V51.468H104.345V39.8568Z"
            fill="#151515"
          />
          <path
            d="M116.035 42.3128H113.683V47.5857C113.683 48.5038 114.219 48.7051 115.049 48.7051C115.363 48.7051 115.702 48.656 116.035 48.656V51.4545C115.343 51.4742 114.651 51.5625 113.958 51.5625C110.714 51.5625 109.894 50.6248 109.894 47.4679V42.303H107.965V39.858H109.884V36.3477H113.683V39.858H116.035V42.3128Z"
            fill="#151515"
          />
          <path
            d="M43.7344 47.4022V41.8839C43.7344 36.1396 39.0854 31.4902 33.3466 31.4902H27.1758C21.4419 31.4902 16.793 36.1396 16.793 41.8741V48.0454C16.793 53.7896 21.4419 58.4391 27.1758 58.4391H47.4113C47.4113 58.4342 43.7344 57.354 43.7344 47.4022ZM26.4051 53.8044C24.6918 53.8044 23.219 52.9649 22.2814 51.6393C21.707 50.8095 21.3928 49.8669 21.383 48.7819V41.1327C21.383 39.4094 22.2323 37.9366 23.548 36.9988C24.3776 36.4342 25.3104 36.1102 26.3953 36.1102H34.0486C35.7718 36.1102 37.2445 36.9595 38.1821 38.2851C38.7467 39.105 39.0707 40.0477 39.0806 41.1425V47.9865C39.0806 50.1222 39.1984 52.0517 39.4193 53.8142L26.4051 53.8044Z"
            fill="#151515"
          />
          <path
            d="M36.3154 46.503C32.5256 48.285 28.1367 48.285 24.3567 46.503C24.7249 45.7127 25.098 44.9223 25.476 44.1221C28.554 45.5752 32.123 45.5752 35.2059 44.1221C35.5741 44.9223 35.9472 45.7127 36.3154 46.503Z"
            fill="#151515"
          />
        </g>
        <defs>
          <clipPath id="clip0_255_21288">
            <rect
              width="132"
              height="89.78"
              fill="white"
              transform="translate(0.719238 0.0742188)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
]

const FAQCTAData = {
  heading: 'Frequently Asked Questions',
  description:
    "Everything you need to know about our verification solutions. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready to Get Started?',
  ctaDescription:
    'Join thousands of businesses using our platform for seamless verification and compliance.',
  items: [
    {
      id: 'faq-1',
      question: 'What services do you offer?',
      answer:
        'We provide identity, business, and document verification solutions, including Aadhaar, PAN, GST, bank verification, and more.',
    },
    {
      id: 'faq-2',
      question: 'How secure is your verification process?',
      answer:
        'Our platform uses industry-leading encryption and compliance measures to ensure secure data processing and fraud prevention.',
    },
    {
      id: 'faq-3',
      question: 'Do you provide API access?',
      answer:
        'Yes, we offer developer-friendly APIs for seamless integration into your workflows, ensuring quick and efficient verification.',
    },
    {
      id: 'faq-4',
      question: 'What industries can benefit from your services?',
      answer:
        'Our solutions cater to fintech, banking, e-commerce, insurance, and various other sectors that require identity and compliance verification.',
    },
    {
      id: 'faq-5',
      question: 'Do you offer support for integration?',
      answer:
        'Yes, our support team is available to assist with integration, documentation, and troubleshooting any technical issues.',
    },
  ],
  supportHeading: 'Still have questions?',
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
  supportButtonText: 'Contact Support',
  supportButtonUrl: 'https://yourwebsite.com/contact',
}

const AboutUs = () => {
  const [insights, setInsights] = useState(1)
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative">
        <AboutImageSlider />
      </section>

      <Wrapper>
        <div className="py-24">
          <Partners />
        </div>
      </Wrapper>

      {/* Our Story Section */}
      <section className="py-20 bg-secondary/10">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-secondary text-[14px] font-semibold leading-[26px] tracking-[0.131px] uppercase">
                WHAT WE DO
              </h2>
              <p className="font-semibold leading-[48px] tracking-[-0.317px] text-[37px]">
                We power trust building solutions
              </p>
              <p className="text-[19px] font-extralight text-foreground/80 leading-[30px] tracking-[0.417px]">
                Trustfull&apos;s Identity Intelligence solution helps businesses
                reduce risks, protect integrity and accelerate growth on a
                global scale. Our solutions unlock hundreds of digital signals
                to accurately detect fraud and fincrime attempts across the
                entire customer journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:place-items-center ">
              <div className="flex flex-col gap-2">
                <h3 className="text-secondary font-bold leading-[64px] text-[60px]">
                  <NumberTicker
                    value={50}
                    className="font-bold tracking-normal text-secondary"
                  />
                  K
                </h3>
                <p className="text-[19px] font-light leading-[30px] tracking-[0.214px]">
                  API requests per day
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-secondary font-bold leading-[64px] text-[60px]">
                  0%
                </h3>
                <p className="text-[19px] font-light leading-[30px] tracking-[0.214px]">
                  Fraud Detection Rate
                </p>
              </div>
              <div className="flex flex-col gap-2 mr-3">
                <h3 className="text-secondary font-bold leading-[64px] text-[60px]">
                  <NumberTicker
                    value={40}
                    className="font-bold tracking-normal text-secondary"
                  />
                  %
                </h3>
                <p className="text-[19px] font-light leading-[30px] tracking-[0.214px]">
                  Population covered
                </p>
              </div>
              <div className="flex flex-col gap-2 mr-4">
                <h3 className="text-secondary font-bold leading-[64px] text-[60px]">
                  <NumberTicker
                    value={60}
                    className="font-bold tracking-normal text-secondary"
                  />
                  +
                </h3>
                <p className="text-[19px] font-light leading-[30px] tracking-[0.214px]">
                  Open data sources
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Mission and Values Section */}
      <section id="mission" className="py-24">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] sora-heading">
              Our Mission & Values
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-center text-lg font-medium text-foreground/80">
              At XRAY AI, we are committed to enabling secure and seamless
              digital verification through AI-driven solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 rounded-lg shadow-md duration-300 hover:shadow-lg bg-yellow-500/10 text-yellow-500 ">
              <div className="p-3 rounded-full bg-yellow-600/10 inline-block mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
              <p className="text-foreground/80">
                Our solutions prioritize security and data integrity, ensuring
                compliance and trust in digital transactions.
              </p>
            </Card>

            <Card className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg bg-purple-500/10 text-purple-500 ">
              <div className=" p-3 rounded-full inline-block mb-4 text-primary bg-purple-500/10 text-purple-500 ">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-foreground/80">
                We uphold the highest standards in verification technology,
                ensuring accuracy and reliability in every API service.
              </p>
            </Card>

            <Card className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg bg-cyan-500/10 text-cyan-500">
              <div className=" p-3 rounded-full inline-block mb-4 bg-cyan-500/10 text-cyan-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground ">
                We are committed to ethical AI practices, maintaining
                transparency and accountability in all verification processes.
              </p>
            </Card>

            <Card className=" p-8 rounded-lg shadow-md duration-300 hover:shadow-lg bg-pink-500/10 text-pink-500">
              <div className=" p-3 rounded-full inline-block mb-4 bg-pink-500/10 text-pink-500">
                <Users className="w-6 h-6 " />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We partner with businesses and organizations to develop
                verification solutions that enhance digital security worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-secondary/10">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] sora-heading">
              Our Impact
            </h2>
            <p className="">
              Enhancing trust and security in digital transactions through
              AI-driven verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={500}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">+</span>
              </div>
              <p className="text-xl ">Businesses Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={1}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">M+</span>
              </div>
              <p className="text-xl">Identities Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={1}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">M+</span>
              </div>
              <p className="text-xl">Documents Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={1}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">M+</span>
              </div>
              <p className="text-xl">Users Verified</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <Wrapper>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 order-2 bg-secondary text-white p-6 lg:p-24 rounded-[4px]">
              {insightsArray.map((insight) => {
                if (insights === insight.id) {
                  return (
                    <div key={insight.id} className="flex flex-col gap-4">
                      <div>
                        <h2 className="font-light text-[22px] leading-[34px]">
                          {insight.heading}
                        </h2>
                      </div>
                      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                        <div className="flex flex-col gap-2">
                          <h2 className="tracking-[0.417px] leading-[30px] font-semibold text-[20px]">
                            {insight.user.name}
                          </h2>
                          <p className="tracking-[0.15px] leading-[26px] font-light text-[15px]">
                            {insight.user.position}
                          </p>
                        </div>
                        <div>
                          <Button className="bg-white text-secondary font-bold tracking-wide hover:bg-white">
                            Read the Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
            <div className="flex order-1 gap-4 justify-center items-center lg:gap-8 overflow-hidden">
              {insightsArray.map((insight) => (
                <div
                  key={insight.id}
                  className={`cursor-pointer p-2 max-sm:w-24 flex items-center justify-center max-w-min ${
                    insights === insight.id ? 'border-b-2 border-secondary' : ''
                  }`}
                  onClick={() => {
                    setInsights(insight.id)
                  }}
                >
                  {insight.logo}
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      <div className="my-16">
        <Connect />
      </div>
      <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
    </div>
  )
}

export default AboutUs
