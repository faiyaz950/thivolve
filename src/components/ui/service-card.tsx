import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  subServices?: string[];
}

export function ServiceCard({ icon: Icon, title, description, subServices }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Icon className="w-10 h-10 text-primary" />
        <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        {subServices && subServices.length > 0 && (
          <div>
            <h4 className="font-medium text-sm text-foreground mb-2">Key Offerings:</h4>
            <div className="flex flex-wrap gap-2">
              {subServices.map((subService) => (
                <Badge key={subService} variant="secondary" className="bg-secondary text-secondary-foreground">
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
