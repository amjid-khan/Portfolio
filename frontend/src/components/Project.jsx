import React, { useState, useEffect, useRef } from "react";
import { Github, Eye } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Text Utils",
    description:
      "Text Utils is a sleek, user-friendly web application that helps you effortlessly analyze, format, and manipulate text. From counting words and characters to transforming text styles, it turns everyday text tasks into a smooth, efficient experience. Perfect for writers, students, and professionals who want to work smarter with words.",
    image:
      "https://pbs.twimg.com/profile_images/470632818653921280/l5V_RKUu_400x400.png",
    github: "https://github.com/amjid-khan/text-utils.git",
  },
  {
    id: 2,
    title: "Todo-App",
    description:
      "Task Manager is a full-stack productivity application designed to help users efficiently organize their daily activities. Built with a modern front-end and robust back-end, it allows users to create, update, and delete tasks in real-time. Features include user authentication, persistent storage, and responsive design, ensuring a seamless experience across devices. Perfect for individuals or teams aiming to boost productivity and stay on top of their tasks effortlessly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEf0D1T051qI1KLDEU3BxO-segTTM4EKDgA&s",
    github: "https://github.com/amjid-khan/Todo-Mern.git",
  },
  {
    id: 3,
    title: "NotePad",
    description:
      "Notepad is a versatile, full-stack application that lets users create, edit, and organize notes seamlessly. With a clean and intuitive interface, it supports real-time saving, categorization, and search functionality. Built for productivity, it ensures your ideas, reminders, and important information are always accessible and secure, whether on desktop or mobile devices.",
    image: "https://i.ytimg.com/vi/n3U4jFbp05M/maxresdefault.jpg",
    github: "https://github.com/amjid-khan/Note-App.git",
  },
  {
    id: 4,
    title: "Black Cafe",
    description:
      "Black Cafe is a full-stack e-commerce application that offers a seamless shopping experience for users. After logging in, users can browse products, add items to the cart, adjust quantities with ease, and proceed to make payments using Stripe (dummy integration). On the admin side, there's a comprehensive dashboard where administrators can manage products (CRUD), view and track orders, and confirm or cancel them efficiently. The app combines user-friendly design with robust back-end functionality to deliver a smooth online cafe experience for both customers and admins.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVus8EvIuy72KgqOQ0d0Xl1Wly5UVsCxFOUg&s",
    github: "https://github.com/amjid-khan/BlackCafe.git",
  },
  {
    id: 5,
    title: "Mobile Shop",
    description:
      "Mobile Shop is a basic full-stack e-commerce application where users can browse and add mobile products categorized by brands such as iPhone, Samsung, Infinix, Vivo, and Oppo. Users can filter products by category, add items to the cart, and view product details easily. The app provides a clean, intuitive UI that makes shopping for mobiles simple and efficient.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NNkmnt98X-aRDimMD25DAUoEgukyhK567g&s",
    github: "https://github.com/amjid-khan/Mobile-shop.git",
  },
  {
    id: 6,
    title: "Hotel Booking Saas",
    description:
      "Hotel Booking is a comprehensive full-stack application designed for multi-hotel management with role-based permissions. After logging in, users can create a hotel through a form and are redirected to their dashboard, where they can manage rooms (CRUD), assign roles, and manage users. The dashboard allows switching between multiple hotels via a dropdown, ensuring seamless management. Users can perform actions based on assigned roles, while a super admin has overarching access to view all hotels, users, and data across the platform. This system combines user-friendly design with robust permission control for efficient hotel management.",
    image:
      "https://static.wixstatic.com/media/b6776d_5a455cd329ac4329b493d9c69988ddc2~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/b6776d_5a455cd329ac4329b493d9c69988ddc2~mv2.jpeg",
    github: "https://github.com/amjid-khan/Hotel-booking.git",
  },
  {
    id: 7,
    title: "OutfitHub",
    description:
      "Outfit Hub is a full-stack e-commerce platform where admins can add products across categories like Women, Men, and Kids, including pants, glasses, shoes, and accessories. On the user side, products are displayed category-wise, and after logging in, users can add items to the cart and manage a wishlist. The app is designed with a clean and intuitive UI, providing a smooth shopping experience, with further features under development.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFYvEL_9u4elJ6hZzcnRuHfilzdcsyWdPag&s",
    github: "https://github.com/amjid-khan/OutfitHub.git",
  },
  {
    id: 8,
    title: "Leap-Feed-Optimizer",
    description:
      "This full-stack application allows users to log in via Google and automatically fetch all their Google Merchant accounts. Users can switch between accounts using a dropdown, with products displayed per account. Future enhancements include one-click optimization of product titles and descriptions, providing a streamlined multi-tenant product management experience. The app is designed for efficiency and scalability, with additional features under development.",
    image:
      "https://mls0rqzktgmc.i.optimole.com/w:77/h:36/q:mauto/ig:avif/https://ppcleap.com/wp-content/uploads/2025/05/Vector-1.png",
    github: "https://github.com/amjid-khan/ppc-leap.git",
  },
  {
    id: 9,
    title: "BG-Color-Changer",
    description:
      "Welcome to our Color Changer Website! Easily customize the background color of your webpage with just a click. Choose from a palette of colors or enter your own color code to create the perfect look for your website. Make your browsing experience vibrant and fun with instant color changes!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlyCloTf4KJ35eHLZqByjBZn8vE0_yfU6Ag&s",
    github: "https://github.com/amjid-khan/change-bg-color.git",
  },
];

const Project = () => {
  const [modalData, setModalData] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const openModal = (project) => setModalData(project);
  const closeModal = () => setModalData(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-black text-white py-16 px-4 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p
          className={`text-center text-3xl font-semibold mb-6 transform transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          <span className="text-sienna font-semibold underline">P</span>rojects
        </p>

        {/* Paragraph */}
        <p
          className={`text-center mb-16 text-sm sm:text-base transform transition-transform duration-1000 ease-out ${
            visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          I am deeply engaged in building and delivering impactful projects that
          transform ideas into functional, real-world applications.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 mt-16 justify-items-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative mt-[100px] w-full max-w-[300px] bg-[#2c2c2c] rounded-[15px] pt-[70px] text-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] group cursor-pointer"
            >
              {/* Image */}
              <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2 w-[150px] h-[150px] rounded-full border-[2px] border-sienna overflow-hidden bg-slate-400 z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-sienna/40 to-transparent transition-all duration-300 group-hover:h-full rounded-b-[15px] pointer-events-none z-0"></div>

              {/* Content */}
              <div className="relative px-4 sm:px-5 pb-5 z-20">
                <div className="flex items-center justify-center gap-2 mb-2 relative">
                  <h3 className="text-[20px]">{project.title}</h3>
                  {/* Eye icon overlay */}
                  <Eye
                    size={18}
                    className="text-sienna cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    onClick={() => openModal(project)}
                  />
                </div>
                <p className="mb-4 overflow-hidden line-clamp-2 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-sienna text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalData && (
          <div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] transition-opacity duration-300 ease-out"
            onClick={closeModal}
          >
            <div
              className="bg-[#2c2c2c] p-6 sm:p-8 rounded-[15px] max-w-[500px] w-[90%] text-white text-center relative transform transition-transform duration-300 ease-out scale-90 opacity-0 animate-modalOpen"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-4 text-lg sm:text-xl">{modalData.title}</h2>
              <p className="mb-6 text-sm sm:text-base">
                {modalData.description}
              </p>
              <button
                className="mt-4 px-5 py-2.5 bg-sienna text-white rounded-lg font-medium cursor-pointer"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
