import Vue, { VNode } from 'vue'

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";

declare global {
  namespace JSX {
    // interface IntrinsicElements {
    //   [elem: string]: any;
    // }
  }
}