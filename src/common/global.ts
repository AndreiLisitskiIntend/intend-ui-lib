export enum EColors {
  Primary = 'primary',
  Warning = 'warning',
  Default = 'default',
  Success = 'success',
}

export type ColorTypes =
  | EColors.Default
  | EColors.Primary
  | EColors.Warning
  | EColors.Success
