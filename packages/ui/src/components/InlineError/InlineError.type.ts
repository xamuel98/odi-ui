export interface InlineErrorProps {
  /**
   * Content briefly explaining how to resolve the invalid form field input.
   */
  message: any;
  /**
   * Unique identifier of the invalid form field that the message describes.
   */
  fieldID: string;
}
