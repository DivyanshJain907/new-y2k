import "server-only";

import { getDb } from "./db";

export type SiteContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    primaryCta: string;
    secondaryCta: string;
  };
  stats: Array<{ label: string; value: string }>;
  about: {
    title: string;
    body: string;
    image: string;
  };
  owner: {
    name: string;
    title: string;
    message: string;
    image: string;
  };
  services: Array<{ title: string; description: string; image: string; phone?: string }>;
  gallery: Array<{ title: string; image: string }>;
  testimonials: Array<{ name: string; quote: string }>;
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
    mapUrl: string;
  };
};

export const defaultContent: SiteContent = {
  hero: {
    eyebrow: "Trusted Cyber Cafe Hub",
    title: "Your Cyber Cafe",
    subtitle:
      "Fast, reliable, and professional services for ticket bookings, printing, documentation, and digital solutions. Experience premium service quality with a modern touch.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "Explore Services",
    secondaryCta: "Contact Now",
  },
  stats: [
    { value: "26+", label: "years of trusted service" },
    { value: "4.8", label: "customer satisfaction rate" },
    { value: "10k+", label: "services completed" },
  ],
  about: {
    title: "Premium Digital Services, Simplified.",
    body:
      "Y2K Computers is your one-stop destination for all digital services. From ticket bookings to passport services, high-security number plates to professional printing — we deliver excellence with cutting-edge technology and a customer-first approach.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },
  owner: {
    name: "Mr. Ashutosh Agarwal",
    title: "Founder & Owner",
    message:
      "At Y2K Computers, our mission is to make digital services accessible and hassle-free for everyone. With over 26 years of experience since our founding in 2000, we've served thousands of satisfied customers with professionalism and dedication. We believe in delivering not just services, but solutions that exceed expectations. Your trust is our biggest achievement.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85",
  },
  services: [
    {
      title: "Train & Bus Ticket Booking",
      description:
        "Quick and easy booking for all trains and buses across India. Get instant confirmations and e-tickets.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "Flight Ticket Booking",
      description:
        "Book domestic and international flights with the best fares. Instant booking and 24/7 support.",
      image:
        "https://images.unsplash.com/photo-1436262174933-eb994ef2d50d?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "Printing & Xerox Services",
      description:
        "Professional printing, photostat, and xerox services with premium quality output. Color and B&W available.",
      image:
        "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "Passport Services",
      description:
        "Complete passport assistance and form filling. Expert guidance through the entire process.",
      image:
        "https://images.unsplash.com/photo-1606426969862-f84ec6e95b95?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "Hindi & English Typing",
      description:
        "Professional typing services in Hindi and English for documents, forms, and digital files.",
      image:
        "https://images.unsplash.com/photo-1547658459-e95f15a1ad53?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "Online Form Filing",
      description:
        "Expert assistance for government and online form submissions with 100% accuracy.",
      image:
        "https://images.unsplash.com/photo-1585776245865-b0a88e51d736?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "High Security Number Plates",
      description:
        "Authorized HSRP number plate generation with hologram and security features.",
      image:
        "https://images.unsplash.com/photo-1609708536965-59acb2e68b80?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
    {
      title: "Passport Size Photos",
      description:
        "Quick studio-quality passport photos with instant digital copies.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29ad0ffe8289?auto=format&fit=crop&w=900&q=85",
      phone: "+91 94122 36477",
    },
  ],
  gallery: [
    {
      title: "Service Center",
      image:
        "https://images.unsplash.com/photo-1553729099-eca3f5f57eaf?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Modern Workspace",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Technology Center",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85",
    },
  ],
  testimonials: [
    {
      name: "Priya Sharma",
      quote:
        "Y2K Computers made my passport application process so easy. The team was incredibly helpful and professional.",
    },
    {
      name: "Rajesh Kumar",
      quote:
        "Best service for ticket bookings! Fast, reliable, and they handle everything professionally.",
    },
    {
      name: "Anita Singh",
      quote:
        "Their printing quality is exceptional, and the customer service is outstanding. Highly recommended!",
    },
  ],
  contact: {
    phone: "+91 94122 36477",
    email: "y2k.moradabad@gmail.com",
    address: "Sri Sai Mandir Rd, MDA Colony, Deen Dayal Nagar-II, Moradabad, Uttar Pradesh 244105",
    hours: "All 7 Days: 10:00 AM - 8:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.573088887455!2d77.7298!3d28.838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6d0b0000001%3A0x0!2sYour%20Business%20Name!5e0!3m2!1sen!2sin!4v1234567890",
  },
};

const COLLECTION = "site_content";
const DOCUMENT_ID = "main";

function mergeSiteContent(content?: Partial<SiteContent> | null): SiteContent {
  return {
    hero: {
      ...defaultContent.hero,
      ...(content?.hero ?? {}),
    },
    stats: Array.isArray(content?.stats) ? content.stats : defaultContent.stats,
    about: {
      ...defaultContent.about,
      ...(content?.about ?? {}),
    },
    owner: {
      ...defaultContent.owner,
      ...(content?.owner ?? {}),
    },
    services: Array.isArray(content?.services)
      ? content.services
      : defaultContent.services,
    gallery: Array.isArray(content?.gallery)
      ? content.gallery
      : defaultContent.gallery,
    testimonials: Array.isArray(content?.testimonials)
      ? content.testimonials
      : defaultContent.testimonials,
    contact: {
      ...defaultContent.contact,
      ...(content?.contact ?? {}),
    },
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const db = await getDb();
    const document = await db
      .collection<{ _id: string; content?: Partial<SiteContent> }>(COLLECTION)
      .findOne({ _id: DOCUMENT_ID });

    return mergeSiteContent(document?.content);
  } catch {
    return defaultContent;
  }
}

export async function saveSiteContent(content: SiteContent) {
  const db = await getDb();

  await db.collection<{ _id: string; content: SiteContent }>(COLLECTION).updateOne(
    { _id: DOCUMENT_ID },
    {
      $set: {
        content,
        updatedAt: new Date(),
      },
    },
    { upsert: true },
  );
}
