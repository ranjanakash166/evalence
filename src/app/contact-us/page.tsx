import Image from 'next/image';

export default function ContactUs() {
  return (
    <section className="section-container max-w-2xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
          <Image
            src="/images/shashank.jpeg"
            alt="John Doe"
            width={120}
            height={120}
            className="rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">Shashank</h2>
          <p className="text-blue-600 font-medium mb-1">Co-Founder & CEO</p>
          <p className="text-gray-500 mb-2">support@evalence.io</p>
          <p className="text-center text-gray-600 text-sm">
            Shashank is passionate about building AI-driven solutions that empower teams to do their best work. Reach out to him for partnership and business inquiries.
          </p>
        </div>
        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6">
          <Image
            src="/images/gaurav.jpeg"
            alt="Alex Smith"
            width={120}
            height={120}
            className="rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-1">Gaurav Suman</h2>
          <p className="text-blue-600 font-medium mb-1">Co-Founder & CTO</p>
          <p className="text-gray-500 mb-2">support@evalence.io</p>
          <p className="text-center text-gray-600 text-sm">
            Gaurav leads our technology and product development. Contact him for technical questions, integrations, or support.
          </p>
        </div>
      </div>
    </section>
  );
} 