"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props = {
  onSelect: (type: "all" | "desktop" | "mobile") => void;
};

export function NavigationMenuDemo({ onSelect }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Period</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col p-2 gap-1">
              <NavigationMenuLink onClick={() => onSelect("all")}>
                All
              </NavigationMenuLink>
              <NavigationMenuLink onClick={() => onSelect("desktop")}>
                Chosen Period
              </NavigationMenuLink>
              <NavigationMenuLink onClick={() => onSelect("mobile")}>
                Last Period
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
