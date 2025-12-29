import svgPaths from "./svg-may4544nkt";

function WeveLogo() {
  return (
    <div className="absolute h-[143px] left-[524px] top-[132px] w-[193px]" data-name="weve logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193 143">
        <g clipPath="url(#clip0_1_23)" id="weve logo">
          <path d={svgPaths.p1607ae00} fill="var(--fill-0, #363F2D)" id="Vector" />
          <path d={svgPaths.p194e0f00} fill="var(--fill-0, #363F2D)" id="Vector_2" />
          <path d={svgPaths.p19a68700} fill="var(--fill-0, #363F2D)" id="Vector_3" />
          <path d={svgPaths.p21888880} fill="var(--fill-0, #363F2D)" id="Vector_4" />
          <path d={svgPaths.p81b1680} fill="var(--fill-0, #363F2D)" id="Vector_5" />
          <path d={svgPaths.p3d6fc200} fill="var(--fill-0, #363F2D)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_23">
            <rect fill="white" height="143" width="193" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function WeveEmailSignupLandingPage() {
  return (
    <div className="bg-[#dbd4bd] relative size-full" data-name="We\'ve Email Signup Landing Page">
      <WeveLogo />
      <p className="absolute font-['Fahkwang:Regular',sans-serif] h-[70px] leading-[normal] left-[620px] not-italic text-[24px] text-black text-center top-[311px] translate-x-[-50%] w-[430px]">Text here about what happens when they sign up for email:</p>
      <div className="absolute bg-black h-[135px] left-[399px] top-[455px] w-[442px]" />
      <div className="absolute font-['Arial:Regular',sans-serif] h-[187px] leading-[normal] left-[620px] not-italic text-[#dbd4bd] text-[24px] text-center top-[483px] translate-x-[-50%] w-[268px]">
        <p className="mb-0">Mailchimp email signup embed code</p>
        <p>goes here</p>
      </div>
    </div>
  );
}