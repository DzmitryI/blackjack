import React, { FC } from 'react';
import { SvgProps } from '../../types/svg';

const IconBack: FC<SvgProps> = ({ width = '30', height = '30' }) => (
  <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="btn-back" clipPath="url(#clip0)">
      <g id="Group">
        <path id="Vector" d="M15.0009 0C6.71663 0 0.000976562 6.71565 0.000976562 14.9999C0.000976562 23.2842 6.71663 29.9999 15.0009 29.9999C23.285 29.9999 30.0007 23.2842 30.0007 14.9999C30.0007 6.71565 23.285 0 15.0009 0ZM22.4726 3.8953L21.5167 5.30811C20.2449 4.45133 18.795 3.83893 17.2345 3.53668L17.5698 1.86452C19.3275 2.20442 20.9893 2.89281 22.4726 3.8953ZM15.7766 21.6571V23.3987H14.36V21.6659C13.3481 21.5547 12.3985 21.1671 11.6845 20.5027C10.9703 19.8385 10.6437 18.862 10.6672 17.5742L10.7034 17.5298H13.2054C13.2054 18.3393 13.3854 18.8767 13.7454 19.216C14.1054 19.5555 14.5632 19.7255 15.1193 19.7255C15.6519 19.7255 16.0601 19.5838 16.3439 19.2998C16.6278 19.016 16.7697 18.6343 16.7697 18.1543C16.7697 17.6802 16.6336 17.294 16.3615 16.9956C16.0894 16.6971 15.6225 16.4192 14.9613 16.1616C13.6619 15.6874 12.6975 15.1594 12.0684 14.577C11.4393 13.9946 11.1248 13.1738 11.1248 12.1144C11.1248 11.1311 11.4155 10.325 12.0445 9.69579C12.6736 9.06669 13.5503 8.69644 14.5622 8.58513V6.7024H15.9788V8.60254C16.9907 8.75483 17.8316 9.18499 18.4198 9.89311C19.008 10.6013 19.303 11.5097 19.2914 12.6392L19.2718 12.6726H16.7697C16.7697 11.9643 16.6278 11.4599 16.3439 11.0853C16.06 10.7108 15.6723 10.5287 15.1807 10.5287C14.6772 10.5287 14.3028 10.6761 14.057 10.9658C13.8111 11.2555 13.6884 11.6419 13.6884 12.1217C13.6884 12.5782 13.8185 12.949 14.079 13.2329C14.3393 13.5168 14.8179 13.7966 15.5145 14.0716C16.8079 14.5808 17.7663 15.1252 18.3896 15.7047C19.0129 16.2841 19.3246 17.0949 19.3246 18.1366C19.3246 19.155 18.9845 19.9687 18.3583 20.5773C17.732 21.1862 16.8897 21.546 15.7766 21.6571ZM12.432 1.86452L12.755 3.53911C11.195 3.84308 9.74574 4.4568 8.4747 5.31499L7.52928 3.8953C9.01252 2.89281 10.6743 2.20442 12.432 1.86452ZM3.89627 7.52821L5.30908 8.48404C4.45231 9.7559 3.84001 11.2056 3.53776 12.7662L1.8655 12.4308C2.20549 10.6733 2.89389 9.01145 3.89627 7.52821ZM3.89617 22.4715C2.89369 20.9883 2.20539 19.3264 1.8655 17.5688L3.54008 17.2458C3.84406 18.8058 4.45777 20.2551 5.31596 21.5262L3.89617 22.4715ZM7.52908 26.1045L8.48492 24.6917C9.75677 25.5486 11.2066 26.161 12.7673 26.4632L12.4319 28.1355C10.6742 27.7954 9.01222 27.1071 7.52908 26.1045ZM17.5697 28.1355L17.2467 26.4609C18.8069 26.1569 20.2561 25.5432 21.5273 24.6849L22.4727 26.1046C20.9893 27.1072 19.3274 27.7956 17.5697 28.1355ZM26.1056 22.4716L24.6928 21.5158C25.5495 20.2439 26.1618 18.794 26.4641 17.2335L28.1363 17.5689C27.7963 19.3265 27.108 20.9884 26.1056 22.4716ZM26.4617 12.754C26.1577 11.194 25.544 9.74467 24.6857 8.47352L26.1054 7.52811C27.1079 9.01134 27.7963 10.6733 28.1362 12.4309L26.4617 12.754Z" fill="black" />
      </g>
      <circle id="background" cx="14.9762" cy="14.9759" r="9.51183" fill="#C4C4C4" />
      <g id="arrow-back">
        <path id="Vector_2" d="M13.8656 9.56327C13.5127 9.87296 12.9283 10.3848 12.5684 10.7004C12.2085 11.0159 11.2548 11.8515 10.4485 12.5574C9.27395 13.587 8.98646 13.8441 9.00048 13.8546C9.00983 13.8616 10.0523 14.8187 11.3179 15.9827C12.5836 17.1455 13.8668 18.3259 14.1695 18.6028C14.471 18.881 14.7211 19.1089 14.7246 19.1089C14.7281 19.1089 14.7292 18.3691 14.7269 17.4646C14.7257 16.56 14.7281 15.8168 14.7328 15.8121C14.7456 15.7992 15.1149 15.8214 15.268 15.8436C16.259 15.9862 17.0631 16.5074 17.5036 17.2916C17.6439 17.5417 17.7374 17.8105 17.7935 18.1214C17.8227 18.2885 17.8239 18.7022 17.7946 18.881C17.7117 19.3835 17.4826 19.8743 17.139 20.2834C16.9731 20.4809 16.7709 20.6784 16.5629 20.8467C16.4425 20.9437 16.4191 20.9706 16.5185 20.8969C16.5921 20.8432 16.6236 20.8338 16.7055 20.8478C16.7592 20.8572 16.7674 20.8549 16.8106 20.8233C16.8445 20.7988 16.8375 20.8081 16.7873 20.856C16.6751 20.96 16.4635 21.1225 16.2602 21.2569C16.1574 21.3258 16.0627 21.3889 16.0498 21.3971C16.03 21.41 16.03 21.41 16.0533 21.3994C16.0674 21.3936 16.1328 21.3878 16.1994 21.3878H16.3198L16.2906 21.4123C16.2345 21.4579 16.3069 21.4146 16.4764 21.3013C16.6458 21.1868 16.8644 21.0185 16.9848 20.9086L17.0525 20.8455L17.3213 20.842C17.5831 20.8397 17.5901 20.8385 17.6264 20.8116C17.6708 20.7789 17.7047 20.759 17.6871 20.7766C17.6626 20.8011 17.492 20.9226 17.3646 21.0056C17.1788 21.1248 16.9988 21.2312 16.8118 21.3293C16.6587 21.41 16.6178 21.4357 16.6856 21.41C16.7031 21.403 16.7779 21.3959 16.8527 21.3959C16.9672 21.3936 16.9859 21.3959 16.9696 21.4088C16.9392 21.4345 17.1904 21.3013 17.3202 21.2242C17.4908 21.1213 17.6754 20.9986 17.8391 20.8794C17.9162 20.8233 17.9664 20.7917 17.9501 20.8081L17.9209 20.8397L18.0319 20.8373L18.1429 20.8362L18.2422 20.752C18.3825 20.634 18.6817 20.3395 18.809 20.1957C19.4775 19.4338 19.8597 18.5806 19.98 17.5779C20.0046 17.3723 20.0069 16.8487 19.9847 16.643C19.9438 16.2679 19.8749 15.936 19.7708 15.6146C19.474 14.6984 18.9224 13.885 18.1663 13.2527C17.2804 12.5106 16.1176 12.0689 14.9174 12.0175L14.7304 12.0093L14.7269 10.504L14.7246 8.99998H14.6159H14.5084L13.8656 9.56327ZM17.1671 20.7485C17.1671 20.7508 17.1449 20.773 17.118 20.7976L17.0677 20.8443L17.1145 20.7941C17.1566 20.7485 17.1671 20.7392 17.1671 20.7485ZM18.0202 20.7497C18.0202 20.752 18.0108 20.7614 18.0003 20.7695C17.9816 20.7847 17.9805 20.7836 17.9957 20.7649C18.0108 20.7462 18.0202 20.7403 18.0202 20.7497Z" fill="black" />
        <path id="Vector_3" d="M18.0531 20.8924C18.0157 20.9216 17.9854 20.9485 17.9854 20.9508C17.9854 20.9543 18.0169 20.9321 18.0555 20.9029C18.1162 20.8561 18.1349 20.8386 18.1233 20.8386C18.1209 20.8386 18.0894 20.8632 18.0531 20.8924Z" fill="black" />
        <path id="Vector_4" d="M16.4182 20.9634C16.403 20.9821 16.4042 20.9832 16.4229 20.968C16.4416 20.9529 16.4474 20.9435 16.438 20.9435C16.4357 20.9435 16.4264 20.9529 16.4182 20.9634Z" fill="black" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>

);

export default IconBack;
