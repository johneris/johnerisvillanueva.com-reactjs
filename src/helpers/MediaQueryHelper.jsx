const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  lowerThanMobileS: `(max-width: ${size.mobileS})`,
  lowerThanMobileM: `(max-width: ${size.mobileM})`,
  lowerThanMobileL: `(max-width: ${size.mobileL})`,
  lowerThanTablet: `(max-width: ${size.tablet})`,
  lowerThanLaptop: `(max-width: ${size.laptop})`,
  lowerThanLaptopL: `(max-width: ${size.laptopL})`,
  lowerThanDesktop: `(max-width: ${size.desktop})`,
  lowerThanDesktopL: `(max-width: ${size.desktop})`
};