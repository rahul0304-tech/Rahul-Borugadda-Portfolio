import React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const InternshipModal = ({ isOpen, onClose, internship }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#181818] text-white border-gray-800 max-w-3xl" aria-describedby="internship-description">
        <div className="relative">
          {internship.companyLogo ? (
            <div className="h-52 bg-gradient-to-r from-gray-900 to-black rounded-md flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/30"></div>
              <img 
                src={internship.companyLogo} 
                alt={internship.company} 
                className="w-40 h-40 object-contain z-10" 
              />
            </div>
          ) : (
            <div className="w-full h-52 bg-gradient-to-r from-gray-900 to-black rounded-md flex items-center justify-center">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                {internship.company}
              </div>
            </div>
          )}
        </div>
        
        <DialogHeader className="pb-2 border-b border-gray-800">
          <div className="space-y-1">
            <DialogTitle className="text-2xl font-bold text-white">
              {internship.role}
            </DialogTitle>
            <div className="flex items-center justify-between">
              <div className="text-lg text-white">{internship.company}</div>
              <Badge variant="outline" className="bg-red-600 text-white border-none">
                {internship.duration}
              </Badge>
            </div>
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
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <div className="space-y-5" id="internship-description">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Summary</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  {internship.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {internship.skillsGained && internship.skillsGained.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Skills Gained</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.skillsGained.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="mt-0">
            <div className="space-y-5">
              {internship.responsibilities && internship.responsibilities.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    {internship.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {internship.achievements && internship.achievements.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Achievements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    {internship.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-500 text-sm">
            <i className="fas fa-building mr-1"></i> {internship.company}
          </p>
          
          <Button 
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InternshipModal;