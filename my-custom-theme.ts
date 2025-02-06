
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
        "--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "2px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "255 255 255",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #81a47f 
        "--color-primary-50": "236 241 236", // #ecf1ec
        "--color-primary-100": "230 237 229", // #e6ede5
        "--color-primary-200": "224 232 223", // #e0e8df
        "--color-primary-300": "205 219 204", // #cddbcc
        "--color-primary-400": "167 191 165", // #a7bfa5
        "--color-primary-500": "129 164 127", // #81a47f
        "--color-primary-600": "116 148 114", // #749472
        "--color-primary-700": "97 123 95", // #617b5f
        "--color-primary-800": "77 98 76", // #4d624c
        "--color-primary-900": "63 80 62", // #3f503e
        // secondary | #f0b056 
        "--color-secondary-50": "253 243 230", // #fdf3e6
        "--color-secondary-100": "252 239 221", // #fcefdd
        "--color-secondary-200": "251 235 213", // #fbebd5
        "--color-secondary-300": "249 223 187", // #f9dfbb
        "--color-secondary-400": "245 200 137", // #f5c889
        "--color-secondary-500": "240 176 86", // #f0b056
        "--color-secondary-600": "216 158 77", // #d89e4d
        "--color-secondary-700": "180 132 65", // #b48441
        "--color-secondary-800": "144 106 52", // #906a34
        "--color-secondary-900": "118 86 42", // #76562a
        // tertiary | #324724 
        "--color-tertiary-50": "224 227 222", // #e0e3de
        "--color-tertiary-100": "214 218 211", // #d6dad3
        "--color-tertiary-200": "204 209 200", // #ccd1c8
        "--color-tertiary-300": "173 181 167", // #adb5a7
        "--color-tertiary-400": "112 126 102", // #707e66
        "--color-tertiary-500": "50 71 36", // #324724
        "--color-tertiary-600": "45 64 32", // #2d4020
        "--color-tertiary-700": "38 53 27", // #26351b
        "--color-tertiary-800": "30 43 22", // #1e2b16
        "--color-tertiary-900": "25 35 18", // #192312
        // success | #40d822 
        "--color-success-50": "226 249 222", // #e2f9de
        "--color-success-100": "217 247 211", // #d9f7d3
        "--color-success-200": "207 245 200", // #cff5c8
        "--color-success-300": "179 239 167", // #b3efa7
        "--color-success-400": "121 228 100", // #79e464
        "--color-success-500": "64 216 34", // #40d822
        "--color-success-600": "58 194 31", // #3ac21f
        "--color-success-700": "48 162 26", // #30a21a
        "--color-success-800": "38 130 20", // #268214
        "--color-success-900": "31 106 17", // #1f6a11
        // warning | #ffd70f 
        "--color-warning-50": "255 249 219", // #fff9db
        "--color-warning-100": "255 247 207", // #fff7cf
        "--color-warning-200": "255 245 195", // #fff5c3
        "--color-warning-300": "255 239 159", // #ffef9f
        "--color-warning-400": "255 227 87", // #ffe357
        "--color-warning-500": "255 215 15", // #ffd70f
        "--color-warning-600": "230 194 14", // #e6c20e
        "--color-warning-700": "191 161 11", // #bfa10b
        "--color-warning-800": "153 129 9", // #998109
        "--color-warning-900": "125 105 7", // #7d6907
        // error | #c91d1d 
        "--color-error-50": "247 221 221", // #f7dddd
        "--color-error-100": "244 210 210", // #f4d2d2
        "--color-error-200": "242 199 199", // #f2c7c7
        "--color-error-300": "233 165 165", // #e9a5a5
        "--color-error-400": "217 97 97", // #d96161
        "--color-error-500": "201 29 29", // #c91d1d
        "--color-error-600": "181 26 26", // #b51a1a
        "--color-error-700": "151 22 22", // #971616
        "--color-error-800": "121 17 17", // #791111
        "--color-error-900": "98 14 14", // #620e0e
        // surface | #ddf5d6 
        "--color-surface-50": "250 254 249", // #fafef9
        "--color-surface-100": "248 253 247", // #f8fdf7
        "--color-surface-200": "247 253 245", // #f7fdf5
        "--color-surface-300": "241 251 239", // #f1fbef
        "--color-surface-400": "231 248 226", // #e7f8e2
        "--color-surface-500": "221 245 214", // #ddf5d6
        "--color-surface-600": "199 221 193", // #c7ddc1
        "--color-surface-700": "166 184 161", // #a6b8a1
        "--color-surface-800": "133 147 128", // #859380
        "--color-surface-900": "108 120 105", // #6c7869

    }
}