export type MyIconsId =
  | "notifications_outlined"
  | "notifications_filled"
  | "club_outlined"
  | "club_filled";

export type MyIconsKey =
  | "NotificationsOutlined"
  | "NotificationsFilled"
  | "ClubOutlined"
  | "ClubFilled";

export enum MyIcons {
  NotificationsOutlined = "notifications_outlined",
  NotificationsFilled = "notifications_filled",
  ClubOutlined = "club_outlined",
  ClubFilled = "club_filled",
}

export const MY_ICONS_CODEPOINTS: { [key in MyIcons]: string } = {
  [MyIcons.NotificationsOutlined]: "61697",
  [MyIcons.NotificationsFilled]: "61698",
  [MyIcons.ClubOutlined]: "61699",
  [MyIcons.ClubFilled]: "61700",
};
