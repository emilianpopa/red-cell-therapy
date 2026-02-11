import { config } from 'dotenv';
import { createClient } from '@sanity/client';
import { FALLBACK_HERO, FALLBACK_TRUST_ICONS, FALLBACK_WHY_SECTION, FALLBACK_WHY_CARDS, FALLBACK_SCIENCE, FALLBACK_PRODUCT, FALLBACK_TESTIMONIALS, FALLBACK_TEAM, FALLBACK_JOURNEY, FALLBACK_FINAL_CTA } from './src/constants/fallbacks';

// Load environment variables from .env file
config();

const client = createClient({
  projectId: '26hsgcuu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

async function migrateContent() {
  console.log('🚀 Starting content migration...\n');

  try {
    // 1. Create Hero Section
    console.log('Creating Hero Section...');
    await client.create({
      _type: 'heroSection',
      ...FALLBACK_HERO,
    });

    // 2. Create Trust Icons
    console.log('Creating Trust Icons...');
    for (const icon of FALLBACK_TRUST_ICONS) {
      await client.create({
        _type: 'trustIcon',
        title: icon.title,
        iconType: icon.iconType,
        order: icon.order,
      });
    }

    // 3. Create Why It Works Section
    console.log('Creating Why It Works Section...');
    await client.create({
      _type: 'whyItWorksSection',
      ...FALLBACK_WHY_SECTION,
    });

    // 4. Create Why It Works Cards
    console.log('Creating Why It Works Cards...');
    for (const card of FALLBACK_WHY_CARDS) {
      await client.create({
        _type: 'whyItWorksCard',
        title: card.title,
        description: card.description,
        iconType: card.iconType,
        order: card.order,
      });
    }

    // 5. Create Science Comparison
    console.log('Creating Science Comparison...');
    await client.create({
      _type: 'scienceComparison',
      ...FALLBACK_SCIENCE,
    });

    // 6. Create Product
    console.log('Creating Product...');
    await client.create({
      _type: 'product',
      ...FALLBACK_PRODUCT,
    });

    // 7. Create Testimonials
    console.log('Creating Testimonials...');
    for (const testimonial of FALLBACK_TESTIMONIALS) {
      await client.create({
        _type: 'testimonial',
        name: testimonial.name,
        role: testimonial.role,
        content: testimonial.content,
        order: testimonial.order,
      });
    }

    // 8. Create Team Members
    console.log('Creating Team Members...');
    for (const member of FALLBACK_TEAM) {
      await client.create({
        _type: 'teamMember',
        name: member.name,
        role: member.role,
        bio: member.bio,
        order: member.order,
        isAdvisoryBoard: false,
      });
    }

    // 9. Create Journey Section
    console.log('Creating Journey Section...');
    await client.create({
      _type: 'journeySection',
      ...FALLBACK_JOURNEY,
    });

    // 10. Create Final CTA
    console.log('Creating Final CTA...');
    await client.create({
      _type: 'finalCTA',
      ...FALLBACK_FINAL_CTA,
    });

    console.log('\n✅ Migration completed successfully!');
    console.log('🎉 All content is now in Sanity and ready to edit!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrateContent();
