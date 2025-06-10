import React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

const ProjectModal = ({ isOpen, onClose, project }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#181818] text-white border-gray-800 max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent rounded-md"></div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <Button 
              variant="outline"
              size="sm"
              className="bg-black/40 backdrop-blur-sm text-white border-white/20 hover:bg-black/60 flex items-center"
              onClick={(e) => {
                e.stopPropagation();
                if (project.githubLink) window.open(project.githubLink || '', '_blank');
              }}
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </Button>
            
            {project.demoLink && (
              <Button 
                variant="destructive"
                size="sm"
                className="bg-red-600/90 backdrop-blur-sm hover:bg-red-700 flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demoLink || '', '_blank');
                }}
              >
                <i className="fas fa-external-link-alt mr-2"></i> Demo
              </Button>
            )}
          </div>
        </div>
        
        <DialogHeader className="pb-2 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold text-white">{project.title}</DialogTitle>
            <Badge variant="outline" className="bg-red-600 text-white border-none">
              {project.category}
            </Badge>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full mt-4">
          <TabsList className="bg-gray-900 border-b border-gray-800 w-full justify-start mb-6">
            <TabsTrigger value="overview" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Details
            </TabsTrigger>
            {project.gallery && project.gallery.length > 0 && (
              <TabsTrigger value="gallery" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Gallery
              </TabsTrigger>
            )}
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
              
              {project.detailedDescription && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">About This Project</h3>
                  <p className="text-gray-400">{project.detailedDescription}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack && project.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="mt-0">
            <div className="space-y-6">
              {project.skillsLearned && project.skillsLearned.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Skills Learned</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    {project.skillsLearned && project.skillsLearned.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.challengesFaced && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Challenges Faced</h3>
                  <p className="text-gray-400">{project.challengesFaced}</p>
                </div>
              )}
              
              {project.solution && (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Solution</h3>
                  <p className="text-gray-400">{project.solution}</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {project.gallery && project.gallery.length > 0 && (
            <TabsContent value="gallery" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery && project.gallery.map((image, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-md"
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-auto object-cover hover:brightness-110 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>
        
        <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            <i className="fas fa-code mr-1"></i> Project by Rahul
          </p>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={onClose}
            >
              Close
            </Button>
            
            {project.demoLink && (
              <Button 
                variant="destructive"
                className="bg-red-600 hover:bg-red-700 flex items-center"
                onClick={() => window.open(project.demoLink || '', '_blank')}
              >
                <i className="fas fa-external-link-alt mr-2"></i> View Live Demo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;