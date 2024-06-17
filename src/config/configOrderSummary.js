import { FIELD_CONFIG } from './configFields';

const config = {
  ORDER_SUMMARY_OPTIONS: [
    { property: 'nametag', label: 'Nametag' },
    { property: 'pronouns', label: 'Pronouns' },
    { property: 'email', label: 'Email' },
    { property: 'phone', label: 'Phone' },
    { property: 'address', label: 'Address' },
    { property: 'volunteer', label: 'Volunteering', mapping: FIELD_CONFIG['volunteer'].options },
    { property: 'hospitality', label: 'Hospitality (limited availability)' },
    { property: 'scholarship', label: 'Scholarships (limited availability)' },
    { property: 'share', label: 'Contact information sharing', defaultValue: 'do not share' },
    // { property: 'dietaryPreferences', label: 'Dietary Preferences', mapping: FIELD_CONFIG['dietaryPreferences'].options },
    // { property: 'dietaryRestrictions', label: 'Dietary Restrictions', mapping: FIELD_CONFIG['dietaryRestrictions'].options},
    // { property: 'allergies', label: 'Allergies' },
    // { property: 'scent', label: 'Scent-free' },
    // { property: 'carpool', label: 'Transportation', mapping: FIELD_CONFIG['carpool'].options },
    // { property: 'bedding', label: 'Bedding', mapping: FIELD_CONFIG['bedding'].options },
    // { property: 'roommate', label: 'Roommate' },
    // { property: 'photo', label: 'Photo Consent' },
    { property: 'comments', label: 'Comments' },
    // { property: 'admission', label: 'Admission Cost' },
  ]
}

export default config;
