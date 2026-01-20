/**
 * Generic wrapper for Carbon Fields data structure.
 * Most block components receive data wrapped in `data: { data: T }`.
 */
export interface BlockData<T> {
  data?: {
    data?: T;
  };
}

/**
 * Common properties for buttons in sections.
 */
export interface ButtonProps {
  btn_text?: string;
  btn_url?: string;
  open_in_new_tab?: boolean;
}

/**
 * Common properties for section headings.
 */
export interface HeadingProps {
  title?: string;
  subtitle?: string;
  short_description?: string;
}
