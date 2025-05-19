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
    <Card className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card ${className}`}>
      <CardHeader className="flex flex-row items-start space-x-4 pb-3">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold text-foreground pt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground mb-4">{description}</CardDescription>
        {subServices && subServices.length > 0 && (
          <div>
            <h4 className="font-medium text-xs text-foreground uppercase tracking-wider mb-2">Key Offerings:</h4>
            <div className="flex flex-wrap gap-2">
              {subServices.map((subService) => (
                <Badge key={subService} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
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
