import { BannerType } from './../model/banner-type.enum';

export const bannerIconConfiguration: { [key: string]: string } = {
  [BannerType.ERROR]: 'highlight_off',
  [BannerType.INFO]: 'info',
  [BannerType.SUCCESS]: 'check_circle_outline',
  [BannerType.WARN]: 'error_outline',
};
