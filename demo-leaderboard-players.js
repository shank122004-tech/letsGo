/**
 * demo-leaderboard-players.js
 * ═══════════════════════════════════════════════════════════════════
 * Initializes demo players for the weekly leaderboard
 * These demo players appear to all users at same ranking, XP, and winnings
 * When real user's XP crosses demo player's XP, real user name replaces demo player
 * Demo players are stored in localStorage and do NOT use Firebase
 * ═══════════════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  // Demo player avatar emoji map
  const DEMO_AVATAR_MAP = {
    'av_fire': '🔥',
    'av_lightning': '⚡',
    'av_rocket': '🚀',
    'av_crown': '👑',
    'av_diamond': '💎',
    'av_ninja': '🥷',
    'av_wizard': '🧙‍♂️',
    'av_robot': '🤖',
    'av_astronaut': '👨‍🚀',
    'av_dragon': '🐉',
    'av_legend': '⭐',
    'av_phoenix': '🦅',
    'av_unicorn': '🦄',
    'av_genius': '🧠',
    'av_king': '🤴',
    'av_lion': '🦁',
    'av_eagle': '🦅',
    'av_bear': '🐻',
    'av_snake': '🐍',
    'av_fox': '🦊'
  };

  // Demo players with real-looking names, massive XP, and winnings
  const DEMO_PLAYERS = [
    {
      uid: 'demo_1',
      name: 'Arjun Singh',
      xp: 45630,
      wins: 89,
      coins: 4500,
      avatar: 'av_fire'
    },
    {
      uid: 'demo_2',
      name: 'Priya Sharma',
      xp: 42150,
      wins: 76,
      coins: 4200,
      avatar: 'av_lightning'
    },
    {
      uid: 'demo_3',
      name: 'Rajesh Kumar',
      xp: 38920,
      wins: 68,
      coins: 3800,
      avatar: 'av_rocket'
    },
    {
      uid: 'demo_4',
      name: 'Neha Patel',
      xp: 35480,
      wins: 62,
      coins: 3500,
      avatar: 'av_crown'
    },
    {
      uid: 'demo_5',
      name: 'Vikram Reddy',
      xp: 32750,
      wins: 55,
      coins: 3200,
      avatar: 'av_diamond'
    },
    {
      uid: 'demo_6',
      name: 'Anjali Verma',
      xp: 29340,
      wins: 48,
      coins: 2900,
      avatar: 'av_ninja'
    },
    {
      uid: 'demo_7',
      name: 'Aditya Gupta',
      xp: 26810,
      wins: 42,
      coins: 2600,
      avatar: 'av_wizard'
    },
    {
      uid: 'demo_8',
      name: 'Deepika Singh',
      xp: 24560,
      wins: 38,
      coins: 2400,
      avatar: 'av_robot'
    },
    {
      uid: 'demo_9',
      name: 'Rohan Malhotra',
      xp: 22340,
      wins: 34,
      coins: 2200,
      avatar: 'av_astronaut'
    },
    {
      uid: 'demo_10',
      name: 'Shreya Nair',
      xp: 20150,
      wins: 30,
      coins: 2000,
      avatar: 'av_dragon'
    },
    {
      uid: 'demo_11',
      name: 'Akshay Tiwari',
      xp: 18920,
      wins: 27,
      coins: 1800,
      avatar: 'av_legend'
    },
    {
      uid: 'demo_12',
      name: 'Tanvi Ghosh',
      xp: 17640,
      wins: 24,
      coins: 1700,
      avatar: 'av_phoenix'
    },
    {
      uid: 'demo_13',
      name: 'Varun Joshi',
      xp: 16480,
      wins: 22,
      coins: 1600,
      avatar: 'av_unicorn'
    },
    {
      uid: 'demo_14',
      name: 'Pooja Das',
      xp: 15230,
      wins: 20,
      coins: 1500,
      avatar: 'av_genius'
    },
    {
      uid: 'demo_15',
      name: 'Himanshu Singh',
      xp: 14120,
      wins: 18,
      coins: 1400,
      avatar: 'av_king'
    },
    {
      uid: 'demo_16',
      name: 'Isha Kapoor',
      xp: 13850,
      wins: 17,
      coins: 1350,
      avatar: 'av_lion'
    },
    {
      uid: 'demo_17',
      name: 'Nikhil Pandey',
      xp: 13210,
      wins: 16,
      coins: 1300,
      avatar: 'av_eagle'
    },
    {
      uid: 'demo_18',
      name: 'Sana Khan',
      xp: 12890,
      wins: 15,
      coins: 1250,
      avatar: 'av_bear'
    },
    {
      uid: 'demo_19',
      name: 'Karan Desai',
      xp: 12540,
      wins: 14,
      coins: 1200,
      avatar: 'av_snake'
    },
    {
      uid: 'demo_20',
      name: 'Meera Iyer',
      xp: 12150,
      wins: 13,
      coins: 1150,
      avatar: 'av_fox'
    },
    {
      uid: 'demo_21',
      name: 'Aryan Saxena',
      xp: 11840,
      wins: 12,
      coins: 1100,
      avatar: 'av_fire'
    },
    {
      uid: 'demo_22',
      name: 'Diya Bose',
      xp: 11520,
      wins: 11,
      coins: 1050,
      avatar: 'av_lightning'
    },
    {
      uid: 'demo_23',
      name: 'Sameer Chopra',
      xp: 11200,
      wins: 10,
      coins: 1000,
      avatar: 'av_rocket'
    },
    {
      uid: 'demo_24',
      name: 'Riya Mehta',
      xp: 10890,
      wins: 9,
      coins: 950,
      avatar: 'av_crown'
    },
    {
      uid: 'demo_25',
      name: 'Harsh Pandya',
      xp: 10560,
      wins: 8,
      coins: 900,
      avatar: 'av_diamond'
    },
    {
      uid: 'demo_26',
      name: 'Nishi Rao',
      xp: 10240,
      wins: 7,
      coins: 850,
      avatar: 'av_ninja'
    },
    {
      uid: 'demo_27',
      name: 'Bhavesh Kumar',
      xp: 9920,
      wins: 6,
      coins: 800,
      avatar: 'av_wizard'
    },
    {
      uid: 'demo_28',
      name: 'Priya Singh',
      xp: 9650,
      wins: 5,
      coins: 750,
      avatar: 'av_robot'
    },
    {
      uid: 'demo_29',
      name: 'Raj Verma',
      xp: 9340,
      wins: 4,
      coins: 700,
      avatar: 'av_astronaut'
    },
    {
      uid: 'demo_30',
      name: 'Divya Nambiar',
      xp: 9010,
      wins: 3,
      coins: 650,
      avatar: 'av_dragon'
    },
    {
      uid: 'demo_31',
      name: 'Vivaan Malhotra',
      xp: 8750,
      wins: 3,
      coins: 600,
      avatar: 'av_legend'
    },
    {
      uid: 'demo_32',
      name: 'Ananya Pathak',
      xp: 8480,
      wins: 2,
      coins: 550,
      avatar: 'av_phoenix'
    },
    {
      uid: 'demo_33',
      name: 'Siddharth Roy',
      xp: 8210,
      wins: 2,
      coins: 500,
      avatar: 'av_unicorn'
    },
    {
      uid: 'demo_34',
      name: 'Kavya Mishra',
      xp: 7950,
      wins: 2,
      coins: 450,
      avatar: 'av_genius'
    },
    {
      uid: 'demo_35',
      name: 'Amar Patel',
      xp: 7680,
      wins: 1,
      coins: 400,
      avatar: 'av_king'
    },
    {
      uid: 'demo_36',
      name: 'Neelu Gupta',
      xp: 7420,
      wins: 1,
      coins: 350,
      avatar: 'av_lion'
    },
    {
      uid: 'demo_37',
      name: 'Jatin Bhatt',
      xp: 7150,
      wins: 1,
      coins: 300,
      avatar: 'av_eagle'
    },
    {
      uid: 'demo_38',
      name: 'Simran Kaur',
      xp: 6890,
      wins: 1,
      coins: 250,
      avatar: 'av_bear'
    },
    {
      uid: 'demo_39',
      name: 'Advik Sharma',
      xp: 6620,
      wins: 0,
      coins: 200,
      avatar: 'av_snake'
    },
    {
      uid: 'demo_40',
      name: 'Zoya Khan',
      xp: 6350,
      wins: 0,
      coins: 150,
      avatar: 'av_fox'
    },
    {
      uid: 'demo_41',
      name: 'Nishan Singh',
      xp: 6080,
      wins: 0,
      coins: 100,
      avatar: 'av_fire'
    },
    {
      uid: 'demo_42',
      name: 'Aarav Reddy',
      xp: 5820,
      wins: 0,
      coins: 50,
      avatar: 'av_lightning'
    },
    {
      uid: 'demo_43',
      name: 'Manya Chatterjee',
      xp: 5550,
      wins: 0,
      coins: 30,
      avatar: 'av_rocket'
    },
    {
      uid: 'demo_44',
      name: 'Roshan Nath',
      xp: 5280,
      wins: 0,
      coins: 20,
      avatar: 'av_crown'
    },
    {
      uid: 'demo_45',
      name: 'Shruti Iyer',
      xp: 5010,
      wins: 0,
      coins: 10,
      avatar: 'av_diamond'
    },
    {
      uid: 'demo_46',
      name: 'Harish Bhat',
      xp: 4750,
      wins: 0,
      coins: 5,
      avatar: 'av_ninja'
    },
    {
      uid: 'demo_47',
      name: 'Lia Mukerjee',
      xp: 4480,
      wins: 0,
      coins: 0,
      avatar: 'av_wizard'
    },
    {
      uid: 'demo_48',
      name: 'Vikrant Singh',
      xp: 4210,
      wins: 0,
      coins: 0,
      avatar: 'av_robot'
    },
    {
      uid: 'demo_49',
      name: 'Poorna Mishra',
      xp: 3950,
      wins: 0,
      coins: 0,
      avatar: 'av_astronaut'
    },
    {
      uid: 'demo_50',
      name: 'Sarthak Patel',
      xp: 3680,
      wins: 0,
      coins: 0,
      avatar: 'av_dragon'
    }
  ];

  /**
   * Initialize demo leaderboard entries
   * Called on page load to populate localStorage
   */
  function initializeDemoLeaderboard() {
    try {
      const DEMO_LB_KEY = 'sscai_demo_lb_entries';
      const weekKey = getWeekKeyForDemo();
      
      // Check if demo entries already exist for this week
      let demoEntries = [];
      try {
        const stored = localStorage.getItem(DEMO_LB_KEY);
        if (stored) {
          demoEntries = JSON.parse(stored);
        }
      } catch(e) {
        demoEntries = [];
      }

      // Check if we already have demo entries for this week
      const hasThisWeek = demoEntries.some(e => e.weekKey === weekKey);
      
      if (!hasThisWeek) {
        // Create fresh demo entries for this week
        const newDemoEntries = DEMO_PLAYERS.map(player => ({
          uid: player.uid,
          name: player.name,
          xp: player.xp,
          wins: player.wins,
          coins: player.coins,
          avatar: DEMO_AVATAR_MAP[player.avatar] || '🧑‍🎓',
          avatarId: player.avatar,
          weekKey: weekKey,
          _demo: true,
          battles: player.wins > 0 ? Math.ceil(player.wins * 1.3) : 0
        }));

        // Store in localStorage
        localStorage.setItem(DEMO_LB_KEY, JSON.stringify(newDemoEntries));
        
        if (window.isDev || window.location.hostname === 'localhost') {
          console.log('[Demo Leaderboard] Initialized', newDemoEntries.length, 'demo players for week:', weekKey);
        }
      }
    } catch(error) {
      console.error('[Demo Leaderboard] Error initializing:', error);
    }
  }

  /**
   * Get current week key (same format as battle-arena-patch.js)
   * Format: "YYYY-W##" (e.g., "2024-W15")
   */
  function getWeekKeyForDemo() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now - start;
    const oneDay = 86400000;
    const oneWeek = oneDay * 7;
    const week = Math.floor(diff / oneWeek) + 1;
    const weekStr = String(week).padStart(2, '0');
    return now.getFullYear() + '-W' + weekStr;
  }

  /**
   * Update demo player XP (optional - for future dynamic adjustments)
   * This allows you to modify demo player XP without reloading
   */
  window.updateDemoPlayerXP = function(demoUid, newXP) {
    try {
      const DEMO_LB_KEY = 'sscai_demo_lb_entries';
      const demoEntries = JSON.parse(localStorage.getItem(DEMO_LB_KEY) || '[]');
      const entry = demoEntries.find(e => e.uid === demoUid);
      
      if (entry) {
        entry.xp = newXP;
        localStorage.setItem(DEMO_LB_KEY, JSON.stringify(demoEntries));
        
        // Trigger leaderboard refresh if BA is available
        if (window.BA && typeof window.BA._renderLeaderboard === 'function') {
          window.BA._renderLeaderboard();
        }
      }
    } catch(error) {
      console.error('[Demo Leaderboard] Error updating XP:', error);
    }
  };

  /**
   * Get all demo players (for debugging or admin features)
   */
  window.getDemoPlayers = function() {
    try {
      const DEMO_LB_KEY = 'sscai_demo_lb_entries';
      return JSON.parse(localStorage.getItem(DEMO_LB_KEY) || '[]');
    } catch(error) {
      return [];
    }
  };

  /**
   * Clear demo players from localStorage (for testing)
   */
  window.clearDemoPlayers = function() {
    try {
      localStorage.removeItem('sscai_demo_lb_entries');
      console.log('[Demo Leaderboard] Cleared demo players');
    } catch(error) {
      console.error('[Demo Leaderboard] Error clearing:', error);
    }
  };

  /**
   * Reset demo players for all users (reinitialize)
   */
  window.resetDemoPlayers = function() {
    try {
      clearDemoPlayers();
      initializeDemoLeaderboard();
      console.log('[Demo Leaderboard] Reset complete');
    } catch(error) {
      console.error('[Demo Leaderboard] Error resetting:', error);
    }
  };

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDemoLeaderboard);
  } else {
    // DOM is already ready
    initializeDemoLeaderboard();
  }

  // Also initialize when this script loads (in case it's loaded late)
  initializeDemoLeaderboard();

})();