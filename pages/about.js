import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import ServiceThree from '../components/services/ServiceThree';
import WorkingProcess from '../components/services/WorkingProcess';
import TeamOne from '../components/teams/TeamOne';
import CaseStudyData from '../data/CaseStudies.json';
import {slugify} from '../helpers/utilities';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const workingProcess = {
        title: "Our execution process",
        description:
            "Our comprehensive Bus Body Building strategy ensures a perfectly crafted bus for your business.",
        strategies: [
            {
                id: 1,
                title: "Structure",
                subtitle: "our four step process",
                description:
                    "Gobind Coach Builders starts with a solid foundation. We use high-quality Galvanized Iron (GI) to construct the frame, chassis, floor, side panels, and roof. This ensures a durable and corrosion-resistant structure that can handle the demands of daily travel. The GI provides strength, longevity, and a cost-effective solution, ensuring your buses are built to last.",
                highlightColor: "extra04-color",
                image: "/images/process/process-01.JPG",
            },
            {
                id: 2,
                title: "Panneling",
                subtitle: "our four step process",
                description:
                    "After the robust structure is in place, Gobind Coach Builders focuses on the smooth and attractive exterior. We use GPSP sheets (Galvanized Pre-Painted Steel Sheets) for the body panels. These sheets offer a combination of strength, durability, and a beautiful finish. The galvanized coating provides corrosion resistance, while the pre-painted surface allows for a wide range of colors and designs, giving your buses a unique look.",
                highlightColor: "extra05-color",
                image: "/images/process/process-02.jpg",
            },
            {
                id: 3,
                title: "Interior",
                subtitle: "our four step process",
                description:
                    "Gobind Coach Builders knows that a comfortable interior is crucial for a pleasant journey. We use high-quality ABS sheets to create the interior panels, walls, and ceilings, ensuring a smooth and elegant finish. The ABS sheets are lightweight, durable, and easy to clean, making them ideal for the demanding environment of a bus interior.But it's not just about the basics. We also incorporate cool accessories to enhance the passenger experience. These might include stylish seat covers, modern lighting, comfortable flooring, and innovative storage solutions. We strive to create an inviting and functional space that passengers will love",
                highlightColor: "extra06-color",
                image: "/images/process/process-03.jpg",
            },
            {
                id: 4,
                title: "Final Finishing",
                subtitle: "our four step process",
                description:
                    "This is where Gobind Coach Builders turns your buses into masterpieces. The final finishing involves a series of meticulous steps to ensure a flawless and durable exterior.We begin with a thorough cleaning and preparation of the bus body. Then, we apply high-quality paints and coatings to provide a protective layer and a beautiful finish. We offer a wide range of colors and designs to match your brand identity.Finally, we add the final touches like stripes, logos, and decorative elements. This step ensures that your buses are not just functional but also visually appealing and eye-catching.Now, your buses are ready to hit the road! What are your plans for showcasing your brand new buses? Will you be organizing a grand unveiling event, or are you planning to take them on a test drive? metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
                highlightColor: "extra07-color",
                image: "/images/process/process-04.jpg",
            },
        ],
    };

    return (
        <Layout>
            <Head>
                <title>About Us || Gobind Coach</title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven/>

                <div
                    ref={ref}
                    className="axil-featured-area ax-section-gap bg-color-white"
                >
                    <div className="container">
                        <div className="row d-flex flex-wrap axil-featured row--40">
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                <div className="thumb-inner">
                                    <div className="thumbnail">
                                        <Image
                                            width={801}
                                            height={712}
                                            className="image w-100"
                                            src="/images/featured/featured-image-02.jpg"
                                            alt="Featured Images"
                                        />
                                    </div>
                                    <div className="shape-group">
                                        <div className="shape">
                                            <i className="icon icon-breadcrumb-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <div className="inner">
                                    <div className="section-title text-start">
                                        <span className="sub-title extra04-color">
                                          featured case study
                                        </span>
                                        <h2 className="title">
                                            <Link href={`/case-study/${slugify(CaseStudyData[0].title)}`}>
                                                <a>
                                                    Building buses for world changers{" "}
                                                </a>
                                            </Link>
                                        </h2>
                                        <p className="subtitle-2">
                                            Donec metus lorem, vulputate at sapien sit amet, auctor
                                            iaculis lorem. In vel hendrerit nisi. Vestibulum eget
                                            risus velit. Aliquam tristique libero at dui sodales, et
                                            placerat orci lobortis. Maecenas ipsum neque, elementum id
                                            dignissim et, imperdiet vitae mauris.
                                        </p>
                                        <Link href={`/case-study/${slugify(CaseStudyData[0].title)}`}>
                                            <a className="axil-button btn-large btn-transparent">
                                                <span className="button-text">Read Case Study</span>
                                                <span className="button-icon"/>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                        <div className="single-counterup counterup-style-1">
                                            <h3 className="count">
                                                <CountUp start={0} end={inView ? "15" : 0}/>
                                            </h3>
                                            <p>ROI increase</p>
                                        </div>

                                        <div className="single-counterup counterup-style-1">
                                            <h3 className="count counter-k">
                                                <CountUp start={0} end={inView ? "60" : 0}/>
                                            </h3>
                                            <p>Monthly website visits</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceThree/>

                <TeamOne/>

                <WorkingProcess process={workingProcess}/>
            </main>
        </Layout>
    );
};

export default About;
