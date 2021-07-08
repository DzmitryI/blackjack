import React, { FC } from 'react';

interface ChipProps {
  width?: string;
  height?: string;
}

const Chip50: FC<ChipProps> = ({ width = '66', height = '66' }) => (
  <svg className="chip" width={width} height={height} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M54.3706 7.91758C49.5319 3.77583 43.8397 1.28233 37.9754 0.382641C27.0866 -1.28784 15.6075 2.53897 7.91725 11.5239C-3.91479 25.3478 -2.30032 46.1454 11.5236 57.9777C16.3623 62.1192 22.0543 64.6127 27.9185 65.5124C38.8071 67.1831 50.2866 63.3559 57.9767 54.3707C69.8088 40.547 68.1941 19.7494 54.3706 7.91758ZM17.3509 22.4631L20.174 24.3732C19.0476 26.053 18.2464 27.9678 17.8539 30.0274L14.5123 29.3571C14.9948 26.8456 15.9747 24.511 17.3509 22.4631ZM14.5249 36.5582L17.8712 35.9128C18.2766 37.9666 19.0896 39.8738 20.2247 41.5454L17.3871 43.4348C16.0052 41.3934 15.0172 39.0648 14.5249 36.5582ZM24.3291 20.1948L22.4397 17.3572C24.4851 15.9735 26.8188 14.9858 29.3305 14.4957L29.976 17.842C27.917 18.2452 26.0045 19.058 24.3291 20.1948ZM35.9084 48.0024C37.9612 47.6017 39.8688 46.7947 41.5413 45.6647L43.4303 48.5016C41.3879 49.8782 39.0596 50.8611 36.5539 51.3487L35.9084 48.0024ZM48.5197 43.4161L45.6966 41.5061C46.8263 39.8316 47.6322 37.9215 48.0312 35.8661L51.373 36.5362C50.8838 39.0437 49.899 41.3734 48.5197 43.4161ZM48.0321 29.9807C47.6329 27.9224 46.8263 26.0099 45.6946 24.3334L48.5313 22.4443C49.9097 24.4908 50.8923 26.8243 51.3781 29.3353L48.0321 29.9807ZM53.8919 12.0071L53.2515 16.7394L48.5193 17.3806L49.1602 12.6481L53.8919 12.0071ZM43.436 17.345L41.526 20.1679C39.8473 19.0366 37.9321 18.2307 35.8715 17.8335L36.5419 14.4919C39.0543 14.9791 41.3891 15.9639 43.436 17.345ZM31.1626 6.42046C31.1337 6.29155 31.1173 6.15775 31.1173 6.01995C31.1173 5.01091 31.9354 4.193 32.9444 4.193C33.9532 4.193 34.7714 5.01091 34.7714 6.01995C34.7714 6.15753 34.7549 6.29133 34.726 6.42023C35.6542 6.50714 36.381 7.28726 36.381 8.23851C36.381 9.24756 35.5628 10.0655 34.554 10.0655C33.8597 10.0655 33.256 9.67851 32.9469 9.1082C32.6377 9.67829 32.0343 10.0655 31.34 10.0655C30.3309 10.0655 29.513 9.24756 29.513 8.23851C29.5128 7.28926 30.2367 6.5098 31.1626 6.42046ZM12.2999 12.3643C17.6383 11.1847 18.5869 13.9414 17.9999 15.08C17.5052 16.0397 16.6233 16.188 15.8207 15.885C16.0154 16.6805 15.9754 17.5695 15.0155 18.0645C13.8766 18.6517 11.1202 17.7026 12.2999 12.3643ZM3.96642 35.0577C3.6377 34.0291 4.15645 33.3008 4.93812 32.9476C4.23824 32.5229 3.63748 31.8659 3.96642 30.8373C4.35648 29.6169 6.97644 28.3387 9.91711 32.9476C6.97644 37.5564 4.35648 36.2782 3.96642 35.0577ZM12.0025 53.8873L12.6429 49.155L17.3756 48.5134L16.7342 53.2463L12.0025 53.8873ZM22.4826 48.5136L24.3927 45.6905C26.0683 46.8153 27.9781 47.6163 30.0326 48.0108L29.3625 51.3527C26.8562 50.8682 24.5267 49.8878 22.4826 48.5136ZM34.7318 59.4742C34.7607 59.6031 34.7772 59.7367 34.7772 59.8742C34.7772 60.8833 33.959 61.7014 32.95 61.7014C31.9414 61.7012 31.1235 60.8833 31.1233 59.8744C31.1233 59.7366 31.1397 59.6028 31.1686 59.4739C30.2405 59.387 29.5137 58.6065 29.5137 57.6559C29.5137 56.6468 30.3318 55.8287 31.3408 55.8287C32.0347 55.8287 32.6382 56.2157 32.9475 56.7858C33.2567 56.2159 33.8603 55.8287 34.5544 55.8287C35.5635 55.8287 36.3816 56.6468 36.3816 57.6559C36.3818 58.6047 35.658 59.3848 34.7318 59.4742ZM53.4265 53.4908C48.0879 54.6705 47.139 51.9139 47.7265 50.7753C48.2214 49.8156 49.1109 49.7756 49.9061 49.97C49.6032 49.1677 49.7512 48.2858 50.7109 47.7908C51.8493 47.2036 54.606 48.1526 53.4265 53.4908ZM55.9768 32.9476C58.9175 28.3387 61.5377 29.6169 61.9275 30.8373C62.2563 31.8659 61.6557 32.5229 60.9558 32.9476C61.7375 33.3008 62.2565 34.0291 61.9275 35.0577C61.5375 36.2782 58.9175 37.5564 55.9768 32.9476Z" fill="#5878FC" />
      <path d="M25.1641 33.9404L25.7783 27.9141H31.9707V29.3335H27.0815L26.7163 32.6289C27.3084 32.2803 27.9808 32.106 28.7334 32.106C29.8346 32.106 30.709 32.4712 31.3564 33.2017C32.0039 33.9266 32.3276 34.9089 32.3276 36.1484C32.3276 37.3936 31.9901 38.3758 31.3149 39.0952C30.6453 39.8091 29.7074 40.166 28.501 40.166C27.4329 40.166 26.5614 39.87 25.8862 39.2778C25.2111 38.6857 24.8265 37.8667 24.7324 36.8208H26.1851C26.2791 37.5125 26.5254 38.0355 26.9238 38.3896C27.3223 38.7383 27.848 38.9126 28.501 38.9126C29.2148 38.9126 29.7738 38.6691 30.1777 38.1821C30.5872 37.6951 30.792 37.0228 30.792 36.165C30.792 35.3571 30.5706 34.7096 30.1279 34.2227C29.6908 33.7301 29.1069 33.4839 28.3765 33.4839C27.7069 33.4839 27.1812 33.6305 26.7993 33.9238L26.3926 34.2559L25.1641 33.9404ZM41.583 34.8452C41.583 36.6437 41.2759 37.9801 40.6616 38.8545C40.0474 39.7288 39.0872 40.166 37.7812 40.166C36.4919 40.166 35.5373 39.7399 34.9175 38.8877C34.2977 38.0299 33.9767 36.7516 33.9546 35.0527V33.0024C33.9546 31.2261 34.2617 29.9062 34.876 29.043C35.4902 28.1797 36.4531 27.748 37.7646 27.748C39.0651 27.748 40.0225 28.1659 40.6367 29.0015C41.251 29.8315 41.5664 31.1154 41.583 32.853V34.8452ZM40.0474 32.7451C40.0474 31.4447 39.8647 30.4984 39.4995 29.9062C39.1343 29.3086 38.556 29.0098 37.7646 29.0098C36.9788 29.0098 36.4061 29.3058 36.0464 29.8979C35.6867 30.4901 35.5013 31.4004 35.4902 32.6289V35.0859C35.4902 36.3919 35.6784 37.3576 36.0547 37.9829C36.4365 38.6027 37.012 38.9126 37.7812 38.9126C38.5394 38.9126 39.1011 38.6193 39.4663 38.0327C39.8371 37.4461 40.0308 36.522 40.0474 35.2603V32.7451Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="66" height="66" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Chip50;
