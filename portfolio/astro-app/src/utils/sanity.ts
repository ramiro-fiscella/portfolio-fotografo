import { sanityClient } from 'sanity:client';
import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export async function getAlbums(): Promise<Album[]> {
  return await sanityClient.fetch(
    groq`*[_type == "album" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getAlbum(slug: string): Promise<Album> {
  return await sanityClient.fetch(
    groq`*[_type == "album" && slug.current == $slug][0]`,
    { slug }
  );
}

export interface Album {
  _type: 'album';
  _createdAt: string;
  title?: string;
  excerpt?: string;
  slug: Slug;
  description?: string;
  coverImage?: ImageAsset & { alt?: string };
  gallery?: ImageAsset[]; // Array de imágenes para la galería
  body: PortableTextBlock[];
}
