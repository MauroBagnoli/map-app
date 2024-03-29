import { Link } from 'react-router-dom';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { default as Logo } from '../../assets/logo.svg?react';
import { ModeToggle } from './mode-toggle';

export function NavBar() {
    return (
        <div className='container flex items-center h-14 max-w-screen-2xl'>
            <NavigationMenu className='flex justify-between max-w-screen-2xl'>
                <NavigationMenuList className='gap-5'>
                    <div className='h-5'>
                        <Logo className='w-5 h-5' />
                    </div>
                    <NavigationMenuItem>
                        <Link to='/'>HOME</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/devices">DEVICES</Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <ModeToggle />
            </NavigationMenu>
        </div>
    )
}
