import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/overview',
    icon: <AiIcons.AiOutlineHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Cadastrar Atleta',
    path: '/reports',
    icon: <AiIcons.AiOutlineUserAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Avaliar Atleta',
    path: '/reports',
    icon: <FaIcons.FaWpforms />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Antropométrica',
        path: '/reports/reports1',
        icon: <AiIcons.AiOutlineRight/>,
        cName: 'sub-nav'
      },
      {
        title: 'Aeróbica',
        path: '/reports/reports2',
        icon: <AiIcons.AiOutlineRight/>,
        cName: 'sub-nav'
      },
      {
        title: 'Potencial Esportivo',
        path: '/reports/reports3',
        icon: <AiIcons.AiOutlineRight/>,
      }
    ]
  },
  {
    title: 'Laudos',
    path: '/messages',
    icon: <BsIcons.BsGraphUp />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Individual',
        path: '/messages/message1',
        icon: <AiIcons.AiOutlineRight/>,
      },
      {
        title: 'Comparativo',
        path: '/messages/message2',
        icon: <AiIcons.AiOutlineRight/>,
      }
    ]
  },
  {
    title: 'Relatórios Gerenciais',
    path: '/messages',
    icon: <HiIcons.HiOutlineDocumentReport />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Potencial',
        path: '/messages/message1',
        icon: <AiIcons.AiOutlineRight/>,
      },
      {
        title: 'Indicadores',
        path: '/messages/message2',
        icon: <AiIcons.AiOutlineRight/>,
      }, 
      {
        title: 'Evolução',
        path: '/messages/message2',
        icon: <AiIcons.AiOutlineRight/>,
      }
    ]
  },
  {
    title: 'Questionário Atleta',
    path: '/support',
    icon: <BsIcons.BsClipboardData />
  },
  {
    title: 'Perfil',
    path: '/support',
    icon: <CgIcons.CgProfile />
  },
  {
    title: 'Sair',
    path: '/support',
    icon: <AiIcons.AiOutlineCloseCircle />
  }
];
