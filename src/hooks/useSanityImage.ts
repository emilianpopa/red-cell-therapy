import { urlFor } from '../lib/sanity';
import type { SanityImage } from '../types/sanity';

export function buildImageUrl(image?: SanityImage, width?: number, height?: number): string | null {
  if (!image) return null;

  try {
    let builder = urlFor(image);
    if (width) builder = builder.width(width);
    if (height) builder = builder.height(height);
    return builder.url();
  } catch (error) {
    console.error('Error building image URL:', error);
    return null;
  }
}
