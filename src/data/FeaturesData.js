import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Intelligent Threat Detection',
		description: 'We offer a Proactive Security for Enhanced Data Protection',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'AI Based Computations',
		description: 'AI-based Probabilistic Analysis for Enhanced Data Protection',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Self-Protecting Data',
		description: 'Self-Aware Fragmented Data with Auto-Destruction',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Data Fragmentation',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},

	{
		name: 'Unified Security',
		description:
			'Unified security: Multi-Factor Biometric Fusion for Advanced Security ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
	{
		name: 'Data Fragmentation',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	}
];