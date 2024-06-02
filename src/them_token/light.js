import {
    BORDER_COLOR,
    GRAY_2,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    TXT_PRIMARY_COLOR,
    WHITE_COLOR
} from "../helpers/Constant";

export const lightToken = {
    colorPrimary: PRIMARY_COLOR,
    fontFamily: "'Barlow Condensed', 'Inter', 'Almarai', 'Noto Sans Bengali', sans-serif",
    colorInfo: PRIMARY_COLOR,
    // colorInfoBg: RESTAURANT_PRIMARY_COLOR_FADE,
    // colorInfoBorder: RESTAURANT_PRIMARY_COLOR,
    descriptionBg: WHITE_COLOR, // Description background
    // customBorderColor: PRIMARY_COLOR_FADE_2, // Use this variable in jsx
    customBGC: WHITE_COLOR,
    colorTextBase: TXT_PRIMARY_COLOR,
}

export const lightComponentsToken = {
    Input: {
        colorPrimaryHover: BORDER_COLOR,
        controlHeight: 46,
        colorBorder: BORDER_COLOR,
        activeShadow: "0 0",
    },
    InputNumber: {
        colorPrimaryHover: BORDER_COLOR,
        controlHeight: 46,
        colorBorder: BORDER_COLOR,
        activeShadow: "0 0",
    },
    Select: {
        colorPrimaryHover: BORDER_COLOR
    },
    DatePicker: {
        colorPrimaryHover: BORDER_COLOR
    },
    Table: {
        colorFillAlter: WHITE_COLOR,
    },
    Button: {
        controlHeight: "46px",
        borderRadius: "5px",
        colorError: SECONDARY_COLOR,
        colorText: GRAY_2,
    },
    Menu: {
        itemHeight: 44,
        fontSize: 16,
    },
}