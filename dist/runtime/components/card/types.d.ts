import type { ImgHTMLAttributes } from 'vue';
export interface CardImgProps {
    position?: 'top' | 'bottom';
    src?: ImgHTMLAttributes['src'];
    title?: ImgHTMLAttributes['title'];
    alt?: ImgHTMLAttributes['alt'];
}
export interface CardTitleProps {
    tag?: string;
    html?: string;
}
export interface CardSubtitleProps {
    tag?: string;
    html?: string;
}
export interface CardTextProps {
    tag?: string;
    html?: string;
}
export interface CardHeaderProps {
    tag?: string;
    html?: string;
}
export interface CardBodyProps {
    tag?: string;
    html?: string;
}
export interface CardFooterProps {
    tag?: string;
    html?: string;
}
export interface CardProps {
    imgSrc?: CardImgProps['src'];
    imgTitle?: CardImgProps['title'];
    imgAlt?: CardImgProps['alt'];
    imgPosition?: CardImgProps['position'];
    title?: string;
    titleTag?: CardTitleProps['tag'];
    subtitle?: string;
    subtitleTag?: CardSubtitleProps['tag'];
    headerTag?: CardHeaderProps['tag'];
    header?: string;
    bodyTag?: CardBodyProps['tag'];
    footer?: string;
    footerTag?: CardFooterProps['tag'];
}
