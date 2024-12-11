export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "LTD - Live Tracking Dashboard",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "AI-powered project management platform for real-time tracking, workflow automation, and team collaboration.",
        "offers": {
            "@type": "Offer",
            "availability": "PreOrder",
            "price": "0",
            "priceCurrency": "USD"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150"
        },
        "featureList": [
            "AI-powered project management",
            "Real-time tracking",
            "Automated workflows",
            "Resource allocation",
            "Sprint planning",
            "Risk prediction"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
} 