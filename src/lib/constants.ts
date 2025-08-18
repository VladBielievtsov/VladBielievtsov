export const DEFAULT_THEME = 'dark';
export enum MY_LINK {
  DISCORD = "https://discordapp.com/users/416963547747188738",
  TWITTER = "https://x.com/bvlad0",
  GITHUB = "https://github.com/VladBielievtsov",
}

export const ANIM_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ANIM_ITEM = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "backOut" as const,
    },
  },
};
