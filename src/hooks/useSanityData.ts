import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import type { SanitySiteData } from '../types/sanity';

export function useSanityData() {
  const [data, setData] = useState<SanitySiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = `{
          "siteSettings": *[_type == "siteSettings"][0],
          "heroSection": *[_type == "heroSection"][0],
          "trustIcons": *[_type == "trustIcon"] | order(order asc),
          "whyItWorksSection": *[_type == "whyItWorksSection"][0],
          "whyItWorksCards": *[_type == "whyItWorksCard"] | order(order asc),
          "scienceComparison": *[_type == "scienceComparison"][0],
          "product": *[_type == "product"][0],
          "testimonials": *[_type == "testimonial"] | order(order asc),
          "teamMembers": *[_type == "teamMember"][!isAdvisoryBoard] | order(order asc),
          "journeySection": *[_type == "journeySection"][0],
          "finalCTA": *[_type == "finalCTA"][0]
        }`;

        const result = await client.fetch<SanitySiteData>(query);
        setData(result);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching Sanity data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
