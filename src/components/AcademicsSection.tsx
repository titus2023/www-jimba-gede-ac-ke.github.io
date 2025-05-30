import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Calculator, Beaker, Palette, Award, BookMarked, MapPin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const AcademicsSection = () => {
  const academicSubjects = [
    { icon: <BookOpen className="h-6 w-6" />, name: "Languages", description: "English, Kiswahili." },
    { icon: <Calculator className="h-6 w-6" />, name: "Mathematics", description: "Core Mathematics and Additional Mathematics." },
    { icon: <Beaker className="h-6 w-6" />, name: "Sciences", description: "Biology, Chemistry, Physics." },
    { icon: <Globe className="h-6 w-6" />, name: "Humanities", description: "History, Geography, Religious Studies." },
    { icon: <Palette className="h-6 w-6" />, name: "Arts", description: "Music, Art, and Drama." },
    { icon: <BookMarked className="h-6 w-6" />, name: "Technical Subjects", description: "Business Studies, Agriculture." },
  ];

  const achievements = [
    "Ranked fairly in national KCSE performance for 3 consecutive years",
    "4 national science fair awards in the last decade",
    "Produced 4 University Students in the past 5 years",
    "Regional Drama in debate competitions for 7 years running, Courtesy: Mr Nicholus.",
    "Over 90% of our graduates gain admission to good tertiary institutions",
    "Subcounty Javeline-Ladies  winners 2025",
  ];

  return (
    <section id="curriculum" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Academic Excellence</h2>
          <div className="w-20 h-1 bg-kenya-accent mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive curriculum that prepares students for success in their future endeavors, 
            blending the Kenyan 8-4-4 system with international education standards.
          </p>
        </motion.div>

        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid w-full md:w-fit mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="curriculum" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicSubjects.map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 bg-kenya-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {subject.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground">{subject.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 bg-muted rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Our Educational Approach</h3>
              <p className="mb-6 text-muted-foreground">
                Our curriculum embraces both the Kenyan national system and elements of international education, 
                providing students with a well-rounded learning experience that prepares them for global opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Kenyan 8-4-4 System</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-kenya-red rounded-full mr-2 mt-2"></span>
                      <span>Comprehensive preparation for KCSE examinations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-kenya-red rounded-full mr-2 mt-2"></span>
                      <span>Strong focus on core academic subjects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-kenya-red rounded-full mr-2 mt-2"></span>
                      <span>Structured learning with regular assessments</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">International Standards</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                      <span>Project-based learning components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                      <span>21st century skills development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-kenya-green rounded-full mr-2 mt-2"></span>
                      <span>Digital literacy and technology integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="facilities" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">State-of-the-art Learning Facilities</h3>
                <p className="mb-6 text-muted-foreground">
                  Our school is equipped with modern facilities that create an optimal learning environment
                  for our students. From science labs to sports facilities, we provide everything needed
                  for holistic development.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-kenya-red/10 rounded-full mr-4 mt-1">
                      <Beaker className="h-5 w-5 text-kenya-red" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Science Laboratories</h4>
                      <p className="text-muted-foreground">Fully equipped Physics, Chemistry, and Biology labs with modern equipment for practical learning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-kenya-green/10 rounded-full mr-4 mt-1">
                      <BookOpen className="h-5 w-5 text-kenya-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Library & Resource Center</h4>
                      <p className="text-muted-foreground">A comprehensive library with several books, digital resources, and quiet study areas. Still improving...</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-kenya-accent/10 rounded-full mr-4 mt-1">
                      <Globe className="h-5 w-5 text-kenya-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Computer Labs</h4>
                      <p className="text-muted-foreground">There is a plan to install High-speed internet connected computer labs with the latest software for digital literacy and computer studies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-kenya-earth/10 rounded-full mr-4 mt-1">
                      <Palette className="h-5 w-5 text-kenya-earth" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Arts & Music Studios</h4>
                      <p className="text-muted-foreground">Dedicated spaces for visual arts, music practice, and performing arts with professional equipment.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8 bg-kenya-green hover:bg-kenya-green/90">
                  Take a Virtual Tour
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <img 
                  src="public/lovable-uploads/817da9b6-7f73-442b-823d-6f0f2996eb0c.png" 
                  alt="Modern science lab" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <img 
                  src="public/lovable-uploads/bd7a7496-ec95-4df9-9a2a-63871be0c296.png" 
                  alt="School library" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <img 
                  src="public/lovable-uploads/ce14d638-3f18-4058-9228-11b5eed74dac.png" 
                  alt="Computer lab" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <img 
                  src="public/lovable-uploads/81a28463-cdf6-4427-b230-877495d5db5b.png" 
                  alt="Music studio" 
                  className="rounded-lg shadow-md object-cover h-48 w-full"
                />
                <div className="col-span-2">
                  <img 
                    src="public/lovable-uploads/f30eb6b5-eeb4-47ed-ad31-fa4990f97919.png" 
                    alt="Sports facilities" 
                    className="rounded-lg shadow-md object-cover h-56 w-full"
                  />
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-kenya-red" />
                  Academic Achievements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-muted p-4 rounded-lg border-l-4 border-kenya-accent"
                    >
                      <p>{achievement}</p>
                    </motion.div>
                  ))}
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Success Stories</h4>
                <div className="bg-white border rounded-lg p-6 shadow-sm mb-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src="public/lovable-uploads/2e36467f-59c7-439a-bcc1-0ab6d9bebc53.png" 
                      alt="Alumni portrait" 
                      className="h-14 w-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h5 className="font-medium">Eng. Titus NZomo</h5>
                      <p className="text-sm text-muted-foreground">Class of 2010, Software engineer & Science Teacher.</p>
                    </div>
                  </div>
                  <blockquote className="italic text-muted-foreground">
                    "The foundation I received at Jimba-Gede Secondary School was instrumental in my journey to becoming 
                    a Software engineer. The teachers' dedication and rigorous academic program prepared me for success 
                    at both university."
                  </blockquote>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-muted rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">University Placements</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Gede Vocational Training College</span>
                    <span className="text-sm font-medium bg-kenya-green/10 text-kenya-green px-2 py-1 rounded">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-kenya-green h-2.5 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Kilifi KMTC</span>
                    <span className="text-sm font-medium bg-kenya-red/10 text-kenya-red px-2 py-1 rounded">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-kenya-red h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Watamu Polytechnic</span>
                    <span className="text-sm font-medium bg-kenya-accent/10 text-kenya-accent px-2 py-1 rounded">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-kenya-accent h-2.5 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Foreign Institutions</span>
                    <span className="text-sm font-medium bg-kenya-earth/10 text-kenya-earth px-2 py-1 rounded">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-kenya-earth h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Other Institutions</span>
                    <span className="text-sm font-medium bg-gray-500/10 text-gray-500 px-2 py-1 rounded">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                
                <div className="flex items-center pt-4 border-t border-border">
                  <MapPin className="h-5 w-5 text-kenya-red mr-2" />
                  <p className="text-sm">Based on data from the last 5 graduating classes</p>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AcademicsSection;
