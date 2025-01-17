"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

// const brands = [
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyegfvMm9QOunxz9o0jKOV-I_o31M4ixQ2EA&s',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_DI0AwydFumC3WAL6yNBa-u4tB06pyyi6Q&s',
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
//     'https://media.licdn.com/dms/image/v2/D4D0BAQFAhUKQgmLuUw/company-logo_200_200/company-logo_200_200/0/1686378565084/myfin_advisor_logo?e=2147483647&v=beta&t=CzICeJ_jj6zvMExe3fQ6ABP9isxhPN2F3aJ1bwwaXFs',
// ];


const brands = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
    { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'IDEAS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyegfvMm9QOunxz9o0jKOV-I_o31M4ixQ2EA&s' },
    { name: 'Campus Fund', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_DI0AwydFumC3WAL6yNBa-u4tB06pyyi6Q&s' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' },
    { name: 'MyFin Advisor', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFAhUKQgmLuUw/company-logo_200_200/company-logo_200_200/0/1686378565084/myfin_advisor_logo?e=2147483647&v=beta&t=CzICeJ_jj6zvMExe3fQ6ABP9isxhPN2F3aJ1bwwaXFs' }
]

const BrandsSection = () => {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Partners
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our platform is revolutionizing project management with proven results.
                    </p>
                </motion.div>
                <div className="relative overflow-hidden">
                    <div className="flex flex-row-reverse justify-center items-center animate-marquee-rtl whitespace-nowrap">
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="inline-block justify-center align-middle items-center flex-shrink-0 w-[200px] mx-8 transition-transform duration-300 ease-in-out transform hover:scale-110"
                            >
                                <Image
                                    src={brand.logo || "/placeholder.svg"}
                                    alt={brand.name}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
