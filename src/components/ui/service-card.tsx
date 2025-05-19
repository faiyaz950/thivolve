import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  subServices?: string[];
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, subServices, className }: ServiceCardProps) {
  return (
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card rounded-xl ${className}`}>
      <CardHeader className="flex flex-row items-start space-x-4 pb-3 pt-6 px-6">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-7 h-7 text-primary" /> {/* Increased icon size slightly */}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground pt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-6">
        <CardDescription className="text-base text-muted-foreground mb-4 leading-relaxed">{description}</CardDescription> {/* Increased text size and line height */}
        {subServices && subServices.length > 0 && (
          <div className="mt-auto"> {/* Pushes subservices to the bottom if card content is taller */}
            <h4 className="font-medium text-xs text-foreground uppercase tracking-wider mb-2">Key Offerings:</h4>
            <div className="flex flex-wrap gap-2">
              {subServices.map((subService) => (
                <Badge key={subService} variant="secondary" className="bg-accent/10 text-accent font-medium"> {/* Changed badge style */}
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
