import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  subServices?: string[];
  className?: string;
  iconBgClass?: string; // For specific icon background color if needed
  iconColorClass?: string; // For specific icon color if needed
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  subServices, 
  className,
  iconBgClass = "bg-primary/10", // Default icon background
  iconColorClass = "text-primary" // Default icon color
}: ServiceCardProps) {
  return (
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl ${className}`}>
      <CardHeader className="flex flex-row items-start space-x-4 pb-3 pt-6 px-6">
        <div className={`p-3 rounded-lg ${iconBgClass}`}>
          <Icon className={`w-7 h-7 ${iconColorClass}`} />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground pt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-6">
        <CardDescription className="text-base text-muted-foreground mb-4 leading-relaxed">{description}</CardDescription>
        {subServices && subServices.length > 0 && (
          <div className="mt-auto">
            <h4 className="font-medium text-xs text-foreground uppercase tracking-wider mb-2">Key Offerings:</h4>
            <div className="flex flex-wrap gap-2">
              {subServices.map((subService) => (
                <Badge key={subService} variant="secondary" className="bg-accent/10 text-accent font-medium">
                  {subService}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
