export type MyIconsId =
  | "notifications_outlined_24"
  | "notifications_outlined_20"
  | "notifications_outlined_16"
  | "notifications_filled_24"
  | "notifications_filled_20"
  | "notifications_filled_16"
  | "chart_outlined_24"
  | "chart_outlined_20"
  | "chart_outlined_16"
  | "chart_filled_24"
  | "chart_filled_20"
  | "chart_filled_16"
  | "alert_outlined_24"
  | "alert_outlined_20"
  | "alert_outlined_16"
  | "alert_filled_24"
  | "alert_filled_20"
  | "alert_filled_16";

export type MyIconsKey =
  | "NotificationsOutlined24"
  | "NotificationsOutlined20"
  | "NotificationsOutlined16"
  | "NotificationsFilled24"
  | "NotificationsFilled20"
  | "NotificationsFilled16"
  | "ChartOutlined24"
  | "ChartOutlined20"
  | "ChartOutlined16"
  | "ChartFilled24"
  | "ChartFilled20"
  | "ChartFilled16"
  | "AlertOutlined24"
  | "AlertOutlined20"
  | "AlertOutlined16"
  | "AlertFilled24"
  | "AlertFilled20"
  | "AlertFilled16";

export enum MyIcons {
  NotificationsOutlined24 = "notifications_outlined_24",
  NotificationsOutlined20 = "notifications_outlined_20",
  NotificationsOutlined16 = "notifications_outlined_16",
  NotificationsFilled24 = "notifications_filled_24",
  NotificationsFilled20 = "notifications_filled_20",
  NotificationsFilled16 = "notifications_filled_16",
  ChartOutlined24 = "chart_outlined_24",
  ChartOutlined20 = "chart_outlined_20",
  ChartOutlined16 = "chart_outlined_16",
  ChartFilled24 = "chart_filled_24",
  ChartFilled20 = "chart_filled_20",
  ChartFilled16 = "chart_filled_16",
  AlertOutlined24 = "alert_outlined_24",
  AlertOutlined20 = "alert_outlined_20",
  AlertOutlined16 = "alert_outlined_16",
  AlertFilled24 = "alert_filled_24",
  AlertFilled20 = "alert_filled_20",
  AlertFilled16 = "alert_filled_16",
}

export const MY_ICONS_CODEPOINTS: { [key in MyIcons]: string } = {
  [MyIcons.NotificationsOutlined24]: "61697",
  [MyIcons.NotificationsOutlined20]: "61698",
  [MyIcons.NotificationsOutlined16]: "61699",
  [MyIcons.NotificationsFilled24]: "61700",
  [MyIcons.NotificationsFilled20]: "61701",
  [MyIcons.NotificationsFilled16]: "61702",
  [MyIcons.ChartOutlined24]: "61703",
  [MyIcons.ChartOutlined20]: "61704",
  [MyIcons.ChartOutlined16]: "61705",
  [MyIcons.ChartFilled24]: "61706",
  [MyIcons.ChartFilled20]: "61707",
  [MyIcons.ChartFilled16]: "61708",
  [MyIcons.AlertOutlined24]: "61709",
  [MyIcons.AlertOutlined20]: "61710",
  [MyIcons.AlertOutlined16]: "61711",
  [MyIcons.AlertFilled24]: "61712",
  [MyIcons.AlertFilled20]: "61713",
  [MyIcons.AlertFilled16]: "61714",
};
