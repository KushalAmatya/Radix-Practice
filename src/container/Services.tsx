const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and scalable websites using the latest technologies.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile applications for Android and iOS platforms.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces and experiences.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Improving your site’s visibility on search engines to drive more traffic.",
    icon: "🚀",
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description:
      "Developing secure and scalable e-commerce platforms to grow your business.",
    icon: "🪖",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Creating and managing marketing campaigns to boost your online presence.",
    icon: "💻",
  },
];

export const Services = () => {
  return (
    <section className="py-16 min-h-[700px]" id="services">
      <h2 className="text-center text-3xl font-bold mb-12 text-white">
        Our Services
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
