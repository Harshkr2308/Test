import React from 'react';
import InfoSection from './InfoSection';

const DataInfoSection = () => {
   const features= [
        {
          icon: "teacher.gif",
          title: "Expert Teachers",
          description: "Our team of highly qualified and experienced teachers is dedicated to providing students with exceptional education and personalized attention. With a deep commitment to each student's success, we tailor our teaching methods to meet individual needs, ensuring a comprehensive and enriching learning experience. Join us to benefit from our expertise and supportive learning environment.",
          color:'bg-[#4338ca]'
        },
        {
          icon: "doc.gif",
          title: "Comprehensive Assessments",
          description: "Frequent tests, mock exams, and continuous feedback are integral to our approach, helping students identify their strengths and areas for improvement. Our comprehensive assessment strategy ensures that students are well-prepared, confident, and constantly progressing towards their academic goals. Join us to experience a supportive environment that fosters growth and excellence.",
          color:'bg-[#86efac]'
        },
        {
          icon: "pen.gif",
          title: "Tailored Curriculum",
          description: "We offer a meticulously structured and detailed curriculum designed specifically to meet the needs of students preparing for JEE, NEET, and Board exams. Our tailored approach ensures comprehensive coverage of all essential topics, equipping students with the knowledge and skills required to excel in their exams.",
           color:'bg-[#f43f5e]'
        },
        {
          icon: "star.gif",
          title: "Holistic Development",
          description: "We prioritize not only academic excellence but also the holistic development of our students. Our comprehensive programs include a variety of sports, extracurricular activities, and personality development initiatives. By encouraging participation in diverse activities, we ensure students grow intellectually, physically, and socially, preparing them for success in all aspects of life.",
           color:'bg-[#fef08a]'
        },
        {
          icon: "institute.gif",
          title: "State-of-the-Art Facilities",
          description: "Our state-of-the-art classrooms, well-equipped laboratories, and extensive library provide an exceptional learning environment. These modern facilities ensure that students have access to the latest educational resources and technologies, fostering an engaging and effective educational experience.",
            color:'bg-[#6d28d9]'
        }
      ]
      
  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {features.map((feature, index) => (
          <InfoSection key={index} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default DataInfoSection;
