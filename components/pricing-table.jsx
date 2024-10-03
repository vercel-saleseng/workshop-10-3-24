'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Bronze",
    price: "$149",
    description: "Great for students and hobbyists",
    features: [
      "Access to main conference talks",
      "Digital swag pack",
      "Access to conference app",
      "Virtual networking opportunities",
    ],
  },
  {
    name: "Silver",
    price: "$299",
    description: "Perfect for individual developers",
    features: [
      "All Bronze tier benefits",
      "In-person attendance",
      "Physical conference swag bag",
      "In-person networking opportunities",
    ],
  },
  {
    name: "Gold",
    price: "$499",
    description: "Great for professional developers",
    features: [
      "All Silver tier benefits",
      "Workshop access",
      "Lunch with speakers",
      "Extended Q&A sessions",
      "1-year subscription to online content",
    ],
  },
  {
    name: "Platinum",
    price: "$799",
    description: "Best for team leads and managers",
    features: [
      "All Gold tier benefits",
      "VIP seating",
      "Exclusive networking event",
      "1-on-1 mentoring session",
      "Lifetime access to conference recordings",
      "Team discount for 5+ tickets",
    ],
  },
]

export default function PricingTableComponent() {
  return (
    (<div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your DevConf Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="text-xl font-semibold">{tier.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{tier.description}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Select {tier.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}