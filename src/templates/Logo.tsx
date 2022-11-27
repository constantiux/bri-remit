import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        x="0"
        y="0"
        overflow="visible"
        viewBox="0 0 955.2 626.4"
      >
        <defs>
        <clipPath id="bound_0">
          <path
            d="M134.487 71.32H820.713V555.0799999999999H134.487z"
            pointerEvents="all"
          ></path>
        </clipPath>
      </defs>
      <g className="layer" clipPath="url(#bound_0)" pointerEvents="all">
        <g
          pointerEvents="bounding-box"
          transform="matrix(19.115 0 0 -19.0721 -10.117 -201.912)"
        >
          <path
            fill="#00529c"
            stroke="none"
            d="M33.902-15.255H17.43c-2 0-3.621-1.661-3.621-3.71v-16.312c0-2.03 1.59-3.68 3.565-3.71h16.518c2 0 3.622 1.66 3.622 3.71l.007 16.312c0 2.049-1.62 3.71-3.62 3.71m-14.514-21.83l-.898-.01c-1.088 0-1.97.894-1.97 1.997l-.005.157v15.064l.006.812c.04 1.067.852 1.925 1.913 1.925h1.827c1.656 0 2.998-1.44 2.998-3.137 0-.84-.33-1.602-.862-2.156l-4.661-4.73 4.369-4.45a3.117 3.117 0 00.903-2.177c0-1.82-1.62-3.295-3.62-3.295m13.43.015l-8.144.003s.94 2.035.94 3.295c0 1.537-.512 2.909-1.316 3.817l-2.786 2.84 2.843 2.938c.847.795 1.409 2.207 1.409 3.816 0 1.274-.352 2.402-.92 3.22h1.974c1.656 0 2.999-1.44 2.999-3.136 0-.84-.33-1.602-.862-2.156l-4.572-4.681 9.496-9.683c-.301-.19-.68-.273-1.06-.273m1.989 3.023l-6.805 6.936 3.24 3.294c.66.825 1.079 2.067 1.079 3.456 0 1.282-.357 2.439-.93 3.258l1.45-.044c1.089 0 1.97-.894 1.97-1.997l-.004-14.903z"
          ></path>
        </g>
      </g>
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
