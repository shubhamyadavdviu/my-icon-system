export type MyIconsId =
  | "club_outlined"
  | "club_filled";

export type MyIconsKey =
  | "ClubOutlined"
  | "ClubFilled";

export enum MyIcons {
  ClubOutlined = "club_outlined",
  ClubFilled = "club_filled",
}

export const MY_ICONS_CODEPOINTS: { [key in MyIcons]: string } = {
  [MyIcons.ClubOutlined]: "61697",
  [MyIcons.ClubFilled]: "61698",
};
