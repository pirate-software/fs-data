import { z } from "zod";

import { isFerretKey, type FerretKey } from "./core";

import badgerMugshot from "../assets/ferrets/badger/mugshot.png";
import bagelMugshot from "../assets/ferrets/bagel/mugshot.png";
import bananaMugshot from "../assets/ferrets/banana/mugshot.png";
import banditMugshot from "../assets/ferrets/bandit/mugshot.png";
import beansMugshot from "../assets/ferrets/beans/mugshot.png";
import beefMugshot from "../assets/ferrets/beef/mugshot.png";
import bigmikeMugshot from "../assets/ferrets/bigmike/mugshot.png";
import bruceMugshot from "../assets/ferrets/bruce/mugshot.png";
import cashewMugshot from "../assets/ferrets/cashew/mugshot.png";
import cheeseMugshot from "../assets/ferrets/cheese/mugshot.png";
import chiliMugshot from "../assets/ferrets/chili/mugshot.png";
import cowboyMugshot from "../assets/ferrets/cowboy/mugshot.png";
import demeterMugshot from "../assets/ferrets/demeter/mugshot.png";
import eddieMugshot from "../assets/ferrets/eddie/mugshot.png";
import felixMugshot from "../assets/ferrets/felix/mugshot.png";
import figMugshot from "../assets/ferrets/fig/mugshot.png";
import finnMugshot from "../assets/ferrets/finn/mugshot.png";
import ghostMugshot from "../assets/ferrets/ghost/mugshot.png";
import hazelnutMugshot from "../assets/ferrets/hazelnut/mugshot.png";
import henryMugshot from "../assets/ferrets/henry/mugshot.png";
import jackMugshot from "../assets/ferrets/jack/mugshot.png";
import jasmineMugshot from "../assets/ferrets/jasmine/mugshot.png";
import jinxMugshot from "../assets/ferrets/jinx/mugshot.png";
import kahluaMugshot from "../assets/ferrets/kahlua/mugshot.png";
import kittyMugshot from "../assets/ferrets/kitty/mugshot.png";
import kyloMugshot from "../assets/ferrets/kylo/mugshot.png";
import kyoMugshot from "../assets/ferrets/kyo/mugshot.png";
import latteMugshot from "../assets/ferrets/latte/mugshot.png";
import lokiMugshot from "../assets/ferrets/loki/mugshot.png";
import louiseMugshot from "../assets/ferrets/louise/mugshot.png";
import lucasMugshot from "../assets/ferrets/lucas/mugshot.png";
import luckyMugshot from "../assets/ferrets/lucky/mugshot.png";
import lunaMugshot from "../assets/ferrets/luna/mugshot.png";
import maisyMugshot from "../assets/ferrets/maisy/mugshot.png";
import maitaiMugshot from "../assets/ferrets/maitai/mugshot.png";
import maxMugshot from "../assets/ferrets/max/mugshot.png";
import miloMugshot from "../assets/ferrets/milo/mugshot.png";
import mimosaMugshot from "../assets/ferrets/mimosa/mugshot.png";
import mishkaMugshot from "../assets/ferrets/mishka/mugshot.png";
import mistoffeleesMugshot from "../assets/ferrets/mistoffelees/mugshot.png";
import mochaMugshot from "../assets/ferrets/mocha/mugshot.png";
import mooseMugshot from "../assets/ferrets/moose/mugshot.png";
import mouseMugshot from "../assets/ferrets/mouse/mugshot.png";
import moxieMugshot from "../assets/ferrets/moxie/mugshot.png";
import nachoMugshot from "../assets/ferrets/nacho/mugshot.png";
import odinMugshot from "../assets/ferrets/odin/mugshot.png";
import onionMugshot from "../assets/ferrets/onion/mugshot.png";
import peanutMugshot from "../assets/ferrets/peanut/mugshot.png";
import peanut2Mugshot from "../assets/ferrets/peanut2/mugshot.png";
import peepoMugshot from "../assets/ferrets/peepo/mugshot.png";
import pepperMugshot from "../assets/ferrets/pepper/mugshot.png";
import pepper2Mugshot from "../assets/ferrets/pepper2/mugshot.png";
import pickleMugshot from "../assets/ferrets/pickle/mugshot.png";
import roseMugshot from "../assets/ferrets/rose/mugshot.png";
import roxyMugshot from "../assets/ferrets/roxy/mugshot.png";
import rustyMugshot from "../assets/ferrets/rusty/mugshot.png";
import saiMugshot from "../assets/ferrets/sai/mugshot.png";
import salsaMugshot from "../assets/ferrets/salsa/mugshot.png";
import saltMugshot from "../assets/ferrets/salt/mugshot.png";
import salt2Mugshot from "../assets/ferrets/salt2/mugshot.png";
import scotchMugshot from "../assets/ferrets/scotch/mugshot.png";
import skyeMugshot from "../assets/ferrets/skye/mugshot.png";
import snailsMugshot from "../assets/ferrets/snails/mugshot.png";
import snowballMugshot from "../assets/ferrets/snowball/mugshot.png";
import spudMugshot from "../assets/ferrets/spud/mugshot.png";
import teepMugshot from "../assets/ferrets/teep/mugshot.png";
import thelmaMugshot from "../assets/ferrets/thelma/mugshot.png";
import tobyMugshot from "../assets/ferrets/toby/mugshot.png";
import torchMugshot from "../assets/ferrets/torch/mugshot.png";
import tortillaMugshot from "../assets/ferrets/tortilla/mugshot.png";
import vincentMugshot from "../assets/ferrets/vincent/mugshot.png";
import whiskeyMugshot from "../assets/ferrets/whiskey/mugshot.png";
import zeroMugshot from "../assets/ferrets/zero/mugshot.png";

import badgerImage1 from "../assets/ferrets/badger/01.jpg";
import badgerImage2 from "../assets/ferrets/badger/02.jpg";
import badgerImage3 from "../assets/ferrets/badger/03.jpg";
import badgerImage4 from "../assets/ferrets/badger/04.jpg";
import badgerImage5 from "../assets/ferrets/badger/05.jpg";
import badgerImage6 from "../assets/ferrets/badger/06.jpg";
import badgerImage7 from "../assets/ferrets/badger/07.jpg";
import badgerImage8 from "../assets/ferrets/badger/08.jpg";
import badgerImage9 from "../assets/ferrets/badger/09.jpg";
import badgerImage10 from "../assets/ferrets/badger/10.jpg";
import badgerImage11 from "../assets/ferrets/badger/11.jpg";
import badgerImage12 from "../assets/ferrets/badger/12.jpg";
import bagelImage1 from "../assets/ferrets/bagel/01.png";
import bagelImage2 from "../assets/ferrets/bagel/02.png";
import bagelImage3 from "../assets/ferrets/bagel/03.png";
import bagelImage4 from "../assets/ferrets/bagel/04.png";
import bagelImage5 from "../assets/ferrets/bagel/05.jpg";
import bagelImage6 from "../assets/ferrets/bagel/06.jpg";
import bagelImage7 from "../assets/ferrets/bagel/07.jpg";
import bagelImage8 from "../assets/ferrets/bagel/08.jpg";
import bagelImage9 from "../assets/ferrets/bagel/09.png";
import bagelImage10 from "../assets/ferrets/bagel/10.png";
import bananaImage1 from "../assets/ferrets/banana/01.jpg";
import bananaImage2 from "../assets/ferrets/banana/02.jpg";
import bananaImage3 from "../assets/ferrets/banana/03.jpg";
import bananaImage4 from "../assets/ferrets/banana/04.png";
import bananaImage5 from "../assets/ferrets/banana/05.png";
import bananaImage6 from "../assets/ferrets/banana/06.png";
import bananaImage7 from "../assets/ferrets/banana/07.png";
import bananaImage8 from "../assets/ferrets/banana/08.jpg";
import bananaImage9 from "../assets/ferrets/banana/09.jpg";
import bananaImage10 from "../assets/ferrets/banana/10.jpg";
import bananaImage11 from "../assets/ferrets/banana/11.jpg";
import bananaImage12 from "../assets/ferrets/banana/12.jpg";
import bananaImage13 from "../assets/ferrets/banana/13.jpg";
import bananaImage14 from "../assets/ferrets/banana/14.jpg";
import bananaImage15 from "../assets/ferrets/banana/15.jpg";
import bananaImage16 from "../assets/ferrets/banana/16.jpg";
import bananaImage17 from "../assets/ferrets/banana/17.jpg";
import banditImage1 from "../assets/ferrets/bandit/01.jpg";
import banditImage2 from "../assets/ferrets/bandit/02.jpg";
import banditImage3 from "../assets/ferrets/bandit/03.jpg";
import banditImage4 from "../assets/ferrets/bandit/04.jpg";
import banditImage5 from "../assets/ferrets/bandit/05.png";
import banditImage6 from "../assets/ferrets/bandit/06.jpg";
import beansImage1 from "../assets/ferrets/beans/01.jpg";
import beansImage2 from "../assets/ferrets/beans/02.jpg";
import beansImage3 from "../assets/ferrets/beans/03.jpg";
import beansImage4 from "../assets/ferrets/beans/04.jpg";
import beansImage5 from "../assets/ferrets/beans/05.jpg";
import beansImage6 from "../assets/ferrets/beans/06.jpg";
import beansImage7 from "../assets/ferrets/beans/07.jpg";
import beansImage8 from "../assets/ferrets/beans/08.png";
import beansImage9 from "../assets/ferrets/beans/09.jpg";
import beansImage10 from "../assets/ferrets/beans/10.jpg";
import beansImage11 from "../assets/ferrets/beans/11.jpg";
import beansImage12 from "../assets/ferrets/beans/12.jpg";
import beansImage13 from "../assets/ferrets/beans/13.png";
import beansImage14 from "../assets/ferrets/beans/14.jpg";
import beansImage15 from "../assets/ferrets/beans/15.jpg";
import beansImage16 from "../assets/ferrets/beans/16.jpg";
import beansImage17 from "../assets/ferrets/beans/17.jpg";
import beansImage18 from "../assets/ferrets/beans/18.jpg";
import beansImage19 from "../assets/ferrets/beans/19.jpg";
import beansImage20 from "../assets/ferrets/beans/20.jpg";
import beansImage21 from "../assets/ferrets/beans/21.jpg";
import beansImage22 from "../assets/ferrets/beans/22.jpg";
import beansImage23 from "../assets/ferrets/beans/23.jpg";
import beansImage24 from "../assets/ferrets/beans/24.jpg";
import beansImage25 from "../assets/ferrets/beans/25.jpg";
import beansImage26 from "../assets/ferrets/beans/26.jpg";
import beansImage27 from "../assets/ferrets/beans/27.jpg";
import beansImage28 from "../assets/ferrets/beans/28.png";
import beansImage29 from "../assets/ferrets/beans/29.jpg";
import beansImage30 from "../assets/ferrets/beans/30.jpg";
import beansImage31 from "../assets/ferrets/beans/31.jpg";
import beansImage32 from "../assets/ferrets/beans/32.jpg";
import beansImage33 from "../assets/ferrets/beans/33.jpg";
import beansImage34 from "../assets/ferrets/beans/34.jpg";
import beansImage35 from "../assets/ferrets/beans/35.jpg";
import beansImage36 from "../assets/ferrets/beans/36.jpg";
import beansImage37 from "../assets/ferrets/beans/37.jpg";
import beansImage38 from "../assets/ferrets/beans/38.jpg";
import beansImage39 from "../assets/ferrets/beans/39.jpg";
import beansImage40 from "../assets/ferrets/beans/40.jpg";
import beansImage41 from "../assets/ferrets/beans/41.jpg";
import beansImage42 from "../assets/ferrets/beans/42.jpg";
import beansImage43 from "../assets/ferrets/beans/43.jpg";
import beansImage44 from "../assets/ferrets/beans/44.jpg";
import beansImage45 from "../assets/ferrets/beans/45.jpg";
import beansImage46 from "../assets/ferrets/beans/46.jpg";
import beefImage1 from "../assets/ferrets/beef/01.jpg";
import beefImage2 from "../assets/ferrets/beef/02.jpg";
import beefImage3 from "../assets/ferrets/beef/03.jpg";
import beefImage4 from "../assets/ferrets/beef/04.jpg";
import beefImage5 from "../assets/ferrets/beef/05.jpg";
import beefImage6 from "../assets/ferrets/beef/06.jpg";
import beefImage7 from "../assets/ferrets/beef/07.jpg";
import beefImage8 from "../assets/ferrets/beef/08.jpg";
import beefImage9 from "../assets/ferrets/beef/09.jpg";
import beefImage10 from "../assets/ferrets/beef/10.jpg";
import beefImage11 from "../assets/ferrets/beef/11.jpg";
import beefImage12 from "../assets/ferrets/beef/12.jpg";
import beefImage13 from "../assets/ferrets/beef/13.jpg";
import beefImage14 from "../assets/ferrets/beef/14.jpg";
import beefImage15 from "../assets/ferrets/beef/15.jpg";
import bigmikeImage1 from "../assets/ferrets/bigmike/01.jpg";
import bigmikeImage2 from "../assets/ferrets/bigmike/02.jpg";
import bigmikeImage3 from "../assets/ferrets/bigmike/03.jpg";
import bruceImage1 from "../assets/ferrets/bruce/01.jpg";
import bruceImage2 from "../assets/ferrets/bruce/02.jpg";
import bruceImage3 from "../assets/ferrets/bruce/03.jpg";
import bruceImage4 from "../assets/ferrets/bruce/04.jpg";
import bruceImage5 from "../assets/ferrets/bruce/05.jpg";
import bruceImage6 from "../assets/ferrets/bruce/06.jpg";
import cashewImage1 from "../assets/ferrets/cashew/01.jpg";
import cashewImage2 from "../assets/ferrets/cashew/02.jpg";
import cashewImage3 from "../assets/ferrets/cashew/03.jpg";
import cashewImage4 from "../assets/ferrets/cashew/04.jpg";
import cashewImage5 from "../assets/ferrets/cashew/05.jpg";
import cashewImage6 from "../assets/ferrets/cashew/06.jpg";
import cashewImage7 from "../assets/ferrets/cashew/07.jpg";
import cashewImage8 from "../assets/ferrets/cashew/08.jpg";
import cashewImage9 from "../assets/ferrets/cashew/09.jpg";
import cashewImage10 from "../assets/ferrets/cashew/10.jpg";
import cheeseImage1 from "../assets/ferrets/cheese/01.jpg";
import cheeseImage2 from "../assets/ferrets/cheese/02.jpg";
import cheeseImage3 from "../assets/ferrets/cheese/03.jpg";
import cheeseImage4 from "../assets/ferrets/cheese/04.jpg";
import cheeseImage5 from "../assets/ferrets/cheese/05.jpg";
import cheeseImage6 from "../assets/ferrets/cheese/06.jpg";
import cheeseImage7 from "../assets/ferrets/cheese/07.jpg";
import cheeseImage8 from "../assets/ferrets/cheese/08.jpg";
import cheeseImage9 from "../assets/ferrets/cheese/09.jpg";
import cheeseImage10 from "../assets/ferrets/cheese/10.jpg";
import cheeseImage11 from "../assets/ferrets/cheese/11.jpg";
import cheeseImage12 from "../assets/ferrets/cheese/12.jpg";
import cheeseImage13 from "../assets/ferrets/cheese/13.jpg";
import cheeseImage14 from "../assets/ferrets/cheese/14.jpg";
import cheeseImage15 from "../assets/ferrets/cheese/15.jpg";
import cheeseImage16 from "../assets/ferrets/cheese/16.jpg";
import cheeseImage17 from "../assets/ferrets/cheese/17.jpg";
import cheeseImage18 from "../assets/ferrets/cheese/18.jpg";
import cheeseImage19 from "../assets/ferrets/cheese/19.jpg";
import cheeseImage20 from "../assets/ferrets/cheese/20.jpg";
import cheeseImage21 from "../assets/ferrets/cheese/21.jpg";
import cheeseImage22 from "../assets/ferrets/cheese/22.jpg";
import cheeseImage23 from "../assets/ferrets/cheese/23.jpg";
import cheeseImage24 from "../assets/ferrets/cheese/24.jpg";
import cheeseImage25 from "../assets/ferrets/cheese/25.jpg";
import cheeseImage26 from "../assets/ferrets/cheese/26.jpg";
import cheeseImage27 from "../assets/ferrets/cheese/27.jpg";
import cheeseImage28 from "../assets/ferrets/cheese/28.jpg";
import cheeseImage29 from "../assets/ferrets/cheese/29.jpg";
import cheeseImage30 from "../assets/ferrets/cheese/30.jpg";
import cheeseImage31 from "../assets/ferrets/cheese/31.jpg";
import cheeseImage32 from "../assets/ferrets/cheese/32.jpg";
import cheeseImage33 from "../assets/ferrets/cheese/33.jpg";
import cheeseImage34 from "../assets/ferrets/cheese/34.jpg";
import cheeseImage35 from "../assets/ferrets/cheese/35.jpg";
import cheeseImage36 from "../assets/ferrets/cheese/36.jpg";
import cheeseImage37 from "../assets/ferrets/cheese/37.jpg";
import cheeseImage38 from "../assets/ferrets/cheese/38.jpg";
import cheeseImage39 from "../assets/ferrets/cheese/39.jpg";
import cheeseImage40 from "../assets/ferrets/cheese/40.jpg";
import cheeseImage41 from "../assets/ferrets/cheese/41.jpg";
import cheeseImage42 from "../assets/ferrets/cheese/42.jpg";
import cheeseImage43 from "../assets/ferrets/cheese/43.jpg";
import chiliImage1 from "../assets/ferrets/chili/01.jpg";
import chiliImage2 from "../assets/ferrets/chili/02.jpg";
import chiliImage3 from "../assets/ferrets/chili/03.jpg";
import chiliImage4 from "../assets/ferrets/chili/04.jpg";
import chiliImage5 from "../assets/ferrets/chili/05.jpg";
import chiliImage6 from "../assets/ferrets/chili/06.jpg";
import chiliImage7 from "../assets/ferrets/chili/07.jpg";
import chiliImage8 from "../assets/ferrets/chili/08.jpg";
import chiliImage9 from "../assets/ferrets/chili/09.jpg";
import chiliImage10 from "../assets/ferrets/chili/10.jpg";
import chiliImage11 from "../assets/ferrets/chili/11.jpg";
import cowboyImage1 from "../assets/ferrets/cowboy/01.jpg";
import cowboyImage2 from "../assets/ferrets/cowboy/02.jpg";
import cowboyImage3 from "../assets/ferrets/cowboy/03.jpeg";
import cowboyImage4 from "../assets/ferrets/cowboy/04.jpg";
import cowboyImage5 from "../assets/ferrets/cowboy/05.jpg";
import cowboyImage6 from "../assets/ferrets/cowboy/06.jpg";
import cowboyImage7 from "../assets/ferrets/cowboy/07.png";
import cowboyImage8 from "../assets/ferrets/cowboy/08.jpg";
import cowboyImage9 from "../assets/ferrets/cowboy/09.jpg";
import cowboyImage10 from "../assets/ferrets/cowboy/10.jpg";
import cowboyImage11 from "../assets/ferrets/cowboy/11.jpg";
import cowboyImage12 from "../assets/ferrets/cowboy/12.jpg";
import cowboyImage13 from "../assets/ferrets/cowboy/13.jpg";
import cowboyImage14 from "../assets/ferrets/cowboy/14.png";
import cowboyImage15 from "../assets/ferrets/cowboy/15.jpg";
import cowboyImage16 from "../assets/ferrets/cowboy/16.jpg";
import cowboyImage17 from "../assets/ferrets/cowboy/17.jpg";
import demeterImage1 from "../assets/ferrets/demeter/01.jpg";
import demeterImage2 from "../assets/ferrets/demeter/02.jpg";
import demeterImage3 from "../assets/ferrets/demeter/03.png";
import demeterImage4 from "../assets/ferrets/demeter/04.png";
import demeterImage5 from "../assets/ferrets/demeter/05.jpg";
import demeterImage6 from "../assets/ferrets/demeter/06.jpg";
import demeterImage7 from "../assets/ferrets/demeter/07.jpg";
import demeterImage8 from "../assets/ferrets/demeter/08.jpg";
import eddieImage1 from "../assets/ferrets/eddie/01.jpg";
import eddieImage2 from "../assets/ferrets/eddie/02.jpg";
import eddieImage3 from "../assets/ferrets/eddie/03.jpg";
import eddieImage4 from "../assets/ferrets/eddie/04.jpg";
import eddieImage5 from "../assets/ferrets/eddie/05.jpg";
import eddieImage6 from "../assets/ferrets/eddie/06.jpg";
import eddieImage7 from "../assets/ferrets/eddie/07.jpg";
import eddieImage8 from "../assets/ferrets/eddie/08.jpg";
import eddieImage9 from "../assets/ferrets/eddie/09.jpg";
import eddieImage10 from "../assets/ferrets/eddie/10.jpg";
import eddieImage11 from "../assets/ferrets/eddie/11.jpg";
import eddieImage12 from "../assets/ferrets/eddie/12.jpg";
import eddieImage13 from "../assets/ferrets/eddie/13.jpg";
import eddieImage14 from "../assets/ferrets/eddie/14.jpg";
import eddieImage15 from "../assets/ferrets/eddie/15.jpg";
import eddieImage16 from "../assets/ferrets/eddie/16.jpg";
import eddieImage17 from "../assets/ferrets/eddie/17.jpg";
import eddieImage18 from "../assets/ferrets/eddie/18.jpg";
import eddieImage19 from "../assets/ferrets/eddie/19.jpg";
import eddieImage20 from "../assets/ferrets/eddie/20.jpg";
import eddieImage21 from "../assets/ferrets/eddie/21.jpg";
import eddieImage22 from "../assets/ferrets/eddie/22.jpg";
import eddieImage23 from "../assets/ferrets/eddie/23.jpg";
import eddieImage24 from "../assets/ferrets/eddie/24.jpg";
import felixImage1 from "../assets/ferrets/felix/01.png";
import felixImage2 from "../assets/ferrets/felix/02.png";
import felixImage3 from "../assets/ferrets/felix/03.png";
import felixImage4 from "../assets/ferrets/felix/04.png";
import felixImage5 from "../assets/ferrets/felix/05.jpg";
import felixImage6 from "../assets/ferrets/felix/06.jpg";
import felixImage7 from "../assets/ferrets/felix/07.jpg";
import felixImage8 from "../assets/ferrets/felix/08.jpg";
import felixImage9 from "../assets/ferrets/felix/09.png";
import felixImage10 from "../assets/ferrets/felix/10.png";
import felixImage11 from "../assets/ferrets/felix/11.png";
import felixImage12 from "../assets/ferrets/felix/12.png";
import felixImage13 from "../assets/ferrets/felix/13.png";
import felixImage14 from "../assets/ferrets/felix/14.jpg";
import figImage1 from "../assets/ferrets/fig/01.jpg";
import figImage2 from "../assets/ferrets/fig/02.jpg";
import figImage3 from "../assets/ferrets/fig/03.jpg";
import figImage4 from "../assets/ferrets/fig/04.jpg";
import figImage5 from "../assets/ferrets/fig/05.jpg";
import figImage6 from "../assets/ferrets/fig/06.jpg";
import figImage7 from "../assets/ferrets/fig/07.jpg";
import figImage8 from "../assets/ferrets/fig/08.jpg";
import figImage9 from "../assets/ferrets/fig/09.jpg";
import figImage10 from "../assets/ferrets/fig/10.jpg";
import figImage11 from "../assets/ferrets/fig/11.jpg";
import figImage12 from "../assets/ferrets/fig/12.jpg";
import figImage13 from "../assets/ferrets/fig/13.jpg";
import figImage14 from "../assets/ferrets/fig/14.jpg";
import figImage15 from "../assets/ferrets/fig/15.jpg";
import figImage16 from "../assets/ferrets/fig/16.jpg";
import figImage17 from "../assets/ferrets/fig/17.jpg";
import figImage18 from "../assets/ferrets/fig/18.jpg";
import finnImage1 from "../assets/ferrets/finn/01.png";
import finnImage2 from "../assets/ferrets/finn/02.png";
import finnImage3 from "../assets/ferrets/finn/03.jpg";
import finnImage4 from "../assets/ferrets/finn/04.png";
import ghostImage1 from "../assets/ferrets/ghost/01.jpg";
import ghostImage2 from "../assets/ferrets/ghost/02.jpg";
import ghostImage3 from "../assets/ferrets/ghost/03.jpg";
import ghostImage4 from "../assets/ferrets/ghost/04.jpg";
import ghostImage5 from "../assets/ferrets/ghost/05.jpg";
import ghostImage6 from "../assets/ferrets/ghost/06.jpg";
import ghostImage7 from "../assets/ferrets/ghost/07.jpg";
import ghostImage8 from "../assets/ferrets/ghost/08.jpg";
import ghostImage9 from "../assets/ferrets/ghost/09.jpg";
import ghostImage10 from "../assets/ferrets/ghost/10.jpg";
import ghostImage11 from "../assets/ferrets/ghost/11.jpg";
import ghostImage12 from "../assets/ferrets/ghost/12.jpg";
import ghostImage13 from "../assets/ferrets/ghost/13.jpg";
import ghostImage14 from "../assets/ferrets/ghost/14.jpg";
import ghostImage15 from "../assets/ferrets/ghost/15.jpg";
import ghostImage16 from "../assets/ferrets/ghost/16.jpg";
import hazelnutImage1 from "../assets/ferrets/hazelnut/01.jpg";
import hazelnutImage2 from "../assets/ferrets/hazelnut/02.png";
import hazelnutImage3 from "../assets/ferrets/hazelnut/03.jpg";
import hazelnutImage4 from "../assets/ferrets/hazelnut/04.jpg";
import hazelnutImage5 from "../assets/ferrets/hazelnut/05.jpg";
import hazelnutImage6 from "../assets/ferrets/hazelnut/06.jpg";
import hazelnutImage7 from "../assets/ferrets/hazelnut/07.jpg";
import hazelnutImage8 from "../assets/ferrets/hazelnut/08.jpg";
import hazelnutImage9 from "../assets/ferrets/hazelnut/09.jpg";
import hazelnutImage10 from "../assets/ferrets/hazelnut/10.jpg";
import hazelnutImage11 from "../assets/ferrets/hazelnut/11.jpg";
import hazelnutImage12 from "../assets/ferrets/hazelnut/12.jpg";
import hazelnutImage13 from "../assets/ferrets/hazelnut/13.jpg";
import hazelnutImage14 from "../assets/ferrets/hazelnut/14.jpg";
import hazelnutImage15 from "../assets/ferrets/hazelnut/15.jpg";
import hazelnutImage16 from "../assets/ferrets/hazelnut/16.jpg";
import hazelnutImage17 from "../assets/ferrets/hazelnut/17.jpg";
import hazelnutImage18 from "../assets/ferrets/hazelnut/18.png";
import henryImage1 from "../assets/ferrets/henry/01.jpg";
import henryImage2 from "../assets/ferrets/henry/02.jpg";
import henryImage3 from "../assets/ferrets/henry/03.jpg";
import henryImage4 from "../assets/ferrets/henry/04.jpg";
import henryImage5 from "../assets/ferrets/henry/05.jpg";
import henryImage6 from "../assets/ferrets/henry/06.jpg";
import henryImage7 from "../assets/ferrets/henry/07.jpg";
import henryImage8 from "../assets/ferrets/henry/08.jpg";
import henryImage9 from "../assets/ferrets/henry/09.jpg";
import henryImage10 from "../assets/ferrets/henry/10.jpg";
import henryImage11 from "../assets/ferrets/henry/11.jpg";
import henryImage12 from "../assets/ferrets/henry/12.jpg";
import henryImage13 from "../assets/ferrets/henry/13.jpg";
import henryImage14 from "../assets/ferrets/henry/14.png";
import henryImage15 from "../assets/ferrets/henry/15.jpg";
import henryImage16 from "../assets/ferrets/henry/16.jpg";
import henryImage17 from "../assets/ferrets/henry/17.jpg";
import henryImage18 from "../assets/ferrets/henry/18.jpg";
import henryImage19 from "../assets/ferrets/henry/19.jpg";
import henryImage20 from "../assets/ferrets/henry/20.jpg";
import henryImage21 from "../assets/ferrets/henry/21.jpg";
import henryImage22 from "../assets/ferrets/henry/22.jpg";
import henryImage23 from "../assets/ferrets/henry/23.jpg";
import henryImage24 from "../assets/ferrets/henry/24.png";
import henryImage25 from "../assets/ferrets/henry/25.jpg";
import henryImage26 from "../assets/ferrets/henry/26.jpg";
import henryImage27 from "../assets/ferrets/henry/27.jpg";
import henryImage28 from "../assets/ferrets/henry/28.jpg";
import henryImage29 from "../assets/ferrets/henry/29.jpg";
import henryImage30 from "../assets/ferrets/henry/30.png";
import henryImage31 from "../assets/ferrets/henry/31.jpg";
import henryImage32 from "../assets/ferrets/henry/32.jpg";
import henryImage33 from "../assets/ferrets/henry/33.jpg";
import henryImage34 from "../assets/ferrets/henry/34.jpg";
import henryImage35 from "../assets/ferrets/henry/35.jpg";
import henryImage36 from "../assets/ferrets/henry/36.jpg";
import henryImage37 from "../assets/ferrets/henry/37.jpg";
import henryImage38 from "../assets/ferrets/henry/38.jpg";
import henryImage39 from "../assets/ferrets/henry/39.jpg";
import henryImage40 from "../assets/ferrets/henry/40.jpg";
import henryImage41 from "../assets/ferrets/henry/41.jpg";
import henryImage42 from "../assets/ferrets/henry/42.png";
import henryImage43 from "../assets/ferrets/henry/43.jpg";
import henryImage44 from "../assets/ferrets/henry/44.jpg";
import henryImage45 from "../assets/ferrets/henry/45.jpg";
import henryImage46 from "../assets/ferrets/henry/46.jpg";
import henryImage47 from "../assets/ferrets/henry/47.jpg";
import henryImage48 from "../assets/ferrets/henry/48.jpg";
import henryImage49 from "../assets/ferrets/henry/49.jpg";
import henryImage50 from "../assets/ferrets/henry/50.jpg";
import henryImage51 from "../assets/ferrets/henry/51.jpg";
import henryImage52 from "../assets/ferrets/henry/52.jpg";
import henryImage53 from "../assets/ferrets/henry/53.jpg";
import henryImage54 from "../assets/ferrets/henry/54.jpg";
import henryImage55 from "../assets/ferrets/henry/55.jpg";
import henryImage56 from "../assets/ferrets/henry/56.png";
import henryImage57 from "../assets/ferrets/henry/57.jpg";
import henryImage58 from "../assets/ferrets/henry/58.png";
import henryImage59 from "../assets/ferrets/henry/59.jpg";
import henryImage60 from "../assets/ferrets/henry/60.jpg";
import henryImage61 from "../assets/ferrets/henry/61.jpg";
import henryImage62 from "../assets/ferrets/henry/62.jpg";
import henryImage63 from "../assets/ferrets/henry/63.jpg";
import henryImage64 from "../assets/ferrets/henry/64.jpg";
import henryImage65 from "../assets/ferrets/henry/65.jpg";
import henryImage66 from "../assets/ferrets/henry/66.jpg";
import henryImage67 from "../assets/ferrets/henry/67.jpg";
import henryImage68 from "../assets/ferrets/henry/68.jpg";
import henryImage69 from "../assets/ferrets/henry/69.jpg";
import henryImage70 from "../assets/ferrets/henry/70.jpg";
import henryImage71 from "../assets/ferrets/henry/71.jpg";
import jackImage1 from "../assets/ferrets/jack/01.png";
import jackImage2 from "../assets/ferrets/jack/02.jpg";
import jackImage3 from "../assets/ferrets/jack/03.png";
import jackImage4 from "../assets/ferrets/jack/04.jpg";
import jackImage5 from "../assets/ferrets/jack/05.jpg";
import jackImage6 from "../assets/ferrets/jack/06.jpg";
import jackImage7 from "../assets/ferrets/jack/07.jpg";
import jackImage8 from "../assets/ferrets/jack/08.jpg";
import jackImage9 from "../assets/ferrets/jack/09.jpg";
import jackImage10 from "../assets/ferrets/jack/10.jpg";
import jackImage11 from "../assets/ferrets/jack/11.jpg";
import jasmineImage1 from "../assets/ferrets/jasmine/01.jpg";
import jasmineImage2 from "../assets/ferrets/jasmine/02.jpg";
import jasmineImage3 from "../assets/ferrets/jasmine/03.jpg";
import jasmineImage4 from "../assets/ferrets/jasmine/04.jpg";
import jasmineImage5 from "../assets/ferrets/jasmine/05.jpg";
import jasmineImage6 from "../assets/ferrets/jasmine/06.jpg";
import jinxImage1 from "../assets/ferrets/jinx/01.jpg";
import jinxImage2 from "../assets/ferrets/jinx/02.jpg";
import kahluaImage1 from "../assets/ferrets/kahlua/01.jpg";
import kahluaImage2 from "../assets/ferrets/kahlua/02.jpg";
import kahluaImage3 from "../assets/ferrets/kahlua/03.jpg";
import kahluaImage4 from "../assets/ferrets/kahlua/04.jpg";
import kahluaImage5 from "../assets/ferrets/kahlua/05.jpg";
import kahluaImage6 from "../assets/ferrets/kahlua/06.jpg";
import kahluaImage7 from "../assets/ferrets/kahlua/07.jpg";
import kahluaImage8 from "../assets/ferrets/kahlua/08.jpg";
import kahluaImage9 from "../assets/ferrets/kahlua/09.jpg";
import kahluaImage10 from "../assets/ferrets/kahlua/10.jpg";
import kittyImage1 from "../assets/ferrets/kitty/01.jpg";
import kittyImage2 from "../assets/ferrets/kitty/02.jpg";
import kittyImage3 from "../assets/ferrets/kitty/03.jpg";
import kittyImage4 from "../assets/ferrets/kitty/04.jpg";
import kittyImage5 from "../assets/ferrets/kitty/05.jpg";
import kittyImage6 from "../assets/ferrets/kitty/06.jpg";
import kittyImage7 from "../assets/ferrets/kitty/07.jpg";
import kittyImage8 from "../assets/ferrets/kitty/08.jpg";
import kittyImage9 from "../assets/ferrets/kitty/09.jpg";
import kittyImage10 from "../assets/ferrets/kitty/10.jpg";
import kittyImage11 from "../assets/ferrets/kitty/11.jpg";
import kittyImage12 from "../assets/ferrets/kitty/12.jpg";
import kittyImage13 from "../assets/ferrets/kitty/13.jpg";
import kittyImage14 from "../assets/ferrets/kitty/14.jpg";
import kittyImage15 from "../assets/ferrets/kitty/15.jpg";
import kittyImage16 from "../assets/ferrets/kitty/16.jpg";
import kittyImage17 from "../assets/ferrets/kitty/17.jpg";
import kyloImage1 from "../assets/ferrets/kylo/01.jpg";
import kyloImage2 from "../assets/ferrets/kylo/02.jpg";
import kyloImage3 from "../assets/ferrets/kylo/03.jpg";
import kyloImage4 from "../assets/ferrets/kylo/04.jpg";
import kyoImage1 from "../assets/ferrets/kyo/01.png";
import kyoImage2 from "../assets/ferrets/kyo/02.jpg";
import kyoImage3 from "../assets/ferrets/kyo/03.jpg";
import kyoImage4 from "../assets/ferrets/kyo/04.jpg";
import kyoImage5 from "../assets/ferrets/kyo/05.jpg";
import latteImage1 from "../assets/ferrets/latte/01.png";
import latteImage2 from "../assets/ferrets/latte/02.jpg";
import latteImage3 from "../assets/ferrets/latte/03.jpg";
import latteImage4 from "../assets/ferrets/latte/04.jpg";
import latteImage5 from "../assets/ferrets/latte/05.jpg";
import latteImage6 from "../assets/ferrets/latte/06.jpg";
import latteImage7 from "../assets/ferrets/latte/07.jpg";
import latteImage8 from "../assets/ferrets/latte/08.jpg";
import latteImage9 from "../assets/ferrets/latte/09.jpg";
import latteImage10 from "../assets/ferrets/latte/10.jpg";
import latteImage11 from "../assets/ferrets/latte/11.jpg";
import latteImage12 from "../assets/ferrets/latte/12.jpg";
import latteImage13 from "../assets/ferrets/latte/13.jpg";
import latteImage14 from "../assets/ferrets/latte/14.jpg";
import lokiImage1 from "../assets/ferrets/loki/01.jpg";
import lokiImage2 from "../assets/ferrets/loki/02.jpg";
import lokiImage3 from "../assets/ferrets/loki/03.jpg";
import lokiImage4 from "../assets/ferrets/loki/04.jpg";
import lokiImage5 from "../assets/ferrets/loki/05.jpg";
import lokiImage6 from "../assets/ferrets/loki/06.jpg";
import lokiImage7 from "../assets/ferrets/loki/07.jpg";
import lokiImage8 from "../assets/ferrets/loki/08.jpg";
import lokiImage9 from "../assets/ferrets/loki/09.gif";
import lokiImage10 from "../assets/ferrets/loki/10.jpg";
import lokiImage11 from "../assets/ferrets/loki/11.jpg";
import lokiImage12 from "../assets/ferrets/loki/12.jpg";
import lokiImage13 from "../assets/ferrets/loki/13.jpg";
import lokiImage14 from "../assets/ferrets/loki/14.jpg";
import lokiImage15 from "../assets/ferrets/loki/15.jpg";
import lokiImage16 from "../assets/ferrets/loki/16.jpg";
import lokiImage17 from "../assets/ferrets/loki/17.jpg";
import lokiImage18 from "../assets/ferrets/loki/18.jpg";
import lokiImage19 from "../assets/ferrets/loki/19.png";
import lokiImage20 from "../assets/ferrets/loki/20.jpg";
import lokiImage21 from "../assets/ferrets/loki/21.jpg";
import louiseImage1 from "../assets/ferrets/louise/01.jpg";
import lucasImage1 from "../assets/ferrets/lucas/01.jpg";
import lucasImage2 from "../assets/ferrets/lucas/02.jpg";
import lucasImage3 from "../assets/ferrets/lucas/03.jpg";
import luckyImage1 from "../assets/ferrets/lucky/01.jpg";
import luckyImage2 from "../assets/ferrets/lucky/02.jpg";
import luckyImage3 from "../assets/ferrets/lucky/03.jpg";
import luckyImage4 from "../assets/ferrets/lucky/04.jpg";
import luckyImage5 from "../assets/ferrets/lucky/05.jpg";
import luckyImage6 from "../assets/ferrets/lucky/06.jpg";
import luckyImage7 from "../assets/ferrets/lucky/07.jpg";
import luckyImage8 from "../assets/ferrets/lucky/08.jpg";
import luckyImage9 from "../assets/ferrets/lucky/09.jpg";
import luckyImage10 from "../assets/ferrets/lucky/10.jpg";
import lunaImage1 from "../assets/ferrets/luna/01.jpg";
import lunaImage2 from "../assets/ferrets/luna/02.jpg";
import lunaImage3 from "../assets/ferrets/luna/03.jpg";
import lunaImage4 from "../assets/ferrets/luna/04.jpg";
import lunaImage5 from "../assets/ferrets/luna/05.jpg";
import lunaImage6 from "../assets/ferrets/luna/06.jpg";
import lunaImage7 from "../assets/ferrets/luna/07.png";
import lunaImage8 from "../assets/ferrets/luna/08.jpg";
import lunaImage9 from "../assets/ferrets/luna/09.jpg";
import maitaiImage1 from "../assets/ferrets/maitai/01.jpg";
import maitaiImage2 from "../assets/ferrets/maitai/02.jpg";
import maitaiImage3 from "../assets/ferrets/maitai/03.jpg";
import maitaiImage4 from "../assets/ferrets/maitai/04.jpg";
import maitaiImage5 from "../assets/ferrets/maitai/05.jpg";
import maitaiImage6 from "../assets/ferrets/maitai/06.jpg";
import maitaiImage7 from "../assets/ferrets/maitai/07.jpg";
import maitaiImage8 from "../assets/ferrets/maitai/08.jpg";
import maitaiImage9 from "../assets/ferrets/maitai/09.jpg";
import maisyImage1 from "../assets/ferrets/maisy/01.jpg";
import maisyImage2 from "../assets/ferrets/maisy/02.jpg";
import maisyImage3 from "../assets/ferrets/maisy/03.jpg";
import maisyImage4 from "../assets/ferrets/maisy/04.jpg";
import maxImage1 from "../assets/ferrets/max/01.jpg";
import maxImage2 from "../assets/ferrets/max/02.jpg";
import maxImage3 from "../assets/ferrets/max/03.jpg";
import maxImage4 from "../assets/ferrets/max/04.jpg";
import maxImage5 from "../assets/ferrets/max/05.jpg";
import maxImage6 from "../assets/ferrets/max/06.jpg";
import maxImage7 from "../assets/ferrets/max/07.jpg";
import maxImage8 from "../assets/ferrets/max/08.jpg";
import maxImage9 from "../assets/ferrets/max/09.jpg";
import maxImage10 from "../assets/ferrets/max/10.jpg";
import maxImage11 from "../assets/ferrets/max/11.jpg";
import maxImage12 from "../assets/ferrets/max/12.jpg";
import maxImage13 from "../assets/ferrets/max/13.jpg";
import miloImage1 from "../assets/ferrets/milo/01.jpg";
import miloImage2 from "../assets/ferrets/milo/02.jpg";
import miloImage3 from "../assets/ferrets/milo/03.jpg";
import miloImage4 from "../assets/ferrets/milo/04.jpg";
import miloImage5 from "../assets/ferrets/milo/05.jpg";
import mimosaImage1 from "../assets/ferrets/mimosa/01.jpg";
import mimosaImage2 from "../assets/ferrets/mimosa/02.jpg";
import mimosaImage3 from "../assets/ferrets/mimosa/03.jpg";
import mimosaImage4 from "../assets/ferrets/mimosa/04.jpg";
import mimosaImage5 from "../assets/ferrets/mimosa/05.jpg";
import mishkaImage1 from "../assets/ferrets/mishka/01.jpg";
import mishkaImage2 from "../assets/ferrets/mishka/02.jpg";
import mishkaImage3 from "../assets/ferrets/mishka/03.jpg";
import mishkaImage4 from "../assets/ferrets/mishka/04.jpg";
import mishkaImage5 from "../assets/ferrets/mishka/05.jpg";
import mishkaImage6 from "../assets/ferrets/mishka/06.jpg";
import mishkaImage7 from "../assets/ferrets/mishka/07.jpg";
import mishkaImage8 from "../assets/ferrets/mishka/08.jpg";
import mishkaImage9 from "../assets/ferrets/mishka/09.jpg";
import mistoffeleesImage1 from "../assets/ferrets/mistoffelees/01.jpg";
import mistoffeleesImage2 from "../assets/ferrets/mistoffelees/02.jpg";
import mistoffeleesImage3 from "../assets/ferrets/mistoffelees/03.jpg";
import mistoffeleesImage4 from "../assets/ferrets/mistoffelees/04.jpg";
import mistoffeleesImage5 from "../assets/ferrets/mistoffelees/05.jpg";
import mistoffeleesImage6 from "../assets/ferrets/mistoffelees/06.jpg";
import mistoffeleesImage7 from "../assets/ferrets/mistoffelees/07.jpg";
import mistoffeleesImage8 from "../assets/ferrets/mistoffelees/08.jpg";
import mistoffeleesImage9 from "../assets/ferrets/mistoffelees/09.png";
import mistoffeleesImage10 from "../assets/ferrets/mistoffelees/10.jpg";
import mistoffeleesImage11 from "../assets/ferrets/mistoffelees/11.jpg";
import mistoffeleesImage12 from "../assets/ferrets/mistoffelees/12.jpg";
import mistoffeleesImage13 from "../assets/ferrets/mistoffelees/13.jpg";
import mistoffeleesImage14 from "../assets/ferrets/mistoffelees/14.jpg";
import mistoffeleesImage15 from "../assets/ferrets/mistoffelees/15.jpg";
import mistoffeleesImage16 from "../assets/ferrets/mistoffelees/16.jpg";
import mochaImage1 from "../assets/ferrets/mocha/01.jpg";
import mochaImage2 from "../assets/ferrets/mocha/02.jpg";
import mochaImage3 from "../assets/ferrets/mocha/03.jpg";
import mochaImage4 from "../assets/ferrets/mocha/04.jpg";
import mochaImage5 from "../assets/ferrets/mocha/05.jpg";
import mochaImage6 from "../assets/ferrets/mocha/06.jpg";
import mochaImage7 from "../assets/ferrets/mocha/07.jpg";
import mochaImage8 from "../assets/ferrets/mocha/08.png";
import mochaImage9 from "../assets/ferrets/mocha/09.jpg";
import mochaImage10 from "../assets/ferrets/mocha/10.jpg";
import mochaImage11 from "../assets/ferrets/mocha/11.jpg";
import mochaImage12 from "../assets/ferrets/mocha/12.jpg";
import mochaImage13 from "../assets/ferrets/mocha/13.jpg";
import mochaImage14 from "../assets/ferrets/mocha/14.jpg";
import mochaImage15 from "../assets/ferrets/mocha/15.jpg";
import mochaImage16 from "../assets/ferrets/mocha/16.jpg";
import mochaImage17 from "../assets/ferrets/mocha/17.jpg";
import mochaImage18 from "../assets/ferrets/mocha/18.jpg";
import mochaImage19 from "../assets/ferrets/mocha/19.jpg";
import mochaImage20 from "../assets/ferrets/mocha/20.jpg";
import mochaImage21 from "../assets/ferrets/mocha/21.jpg";
import mochaImage22 from "../assets/ferrets/mocha/22.jpg";
import mochaImage23 from "../assets/ferrets/mocha/23.jpg";
import mochaImage24 from "../assets/ferrets/mocha/24.jpg";
import mochaImage25 from "../assets/ferrets/mocha/25.jpg";
import mochaImage26 from "../assets/ferrets/mocha/26.jpg";
import mochaImage27 from "../assets/ferrets/mocha/27.jpg";
import mochaImage28 from "../assets/ferrets/mocha/28.jpg";
import mochaImage29 from "../assets/ferrets/mocha/29.jpg";
import mochaImage30 from "../assets/ferrets/mocha/30.jpg";
import mochaImage31 from "../assets/ferrets/mocha/31.jpg";
import mochaImage32 from "../assets/ferrets/mocha/32.jpg";
import mooseImage1 from "../assets/ferrets/moose/01.jpg";
import mooseImage2 from "../assets/ferrets/moose/02.jpg";
import mooseImage3 from "../assets/ferrets/moose/03.jpg";
import mooseImage4 from "../assets/ferrets/moose/04.jpg";
import mooseImage5 from "../assets/ferrets/moose/05.jpg";
import mooseImage6 from "../assets/ferrets/moose/06.jpg";
import mooseImage7 from "../assets/ferrets/moose/07.jpg";
import mooseImage8 from "../assets/ferrets/moose/08.jpg";
import mouseImage1 from "../assets/ferrets/mouse/01.jpg";
import mouseImage2 from "../assets/ferrets/mouse/02.jpg";
import mouseImage3 from "../assets/ferrets/mouse/03.jpg";
import mouseImage4 from "../assets/ferrets/mouse/04.jpg";
import mouseImage5 from "../assets/ferrets/mouse/05.jpg";
import mouseImage6 from "../assets/ferrets/mouse/06.jpg";
import mouseImage7 from "../assets/ferrets/mouse/07.jpg";
import mouseImage8 from "../assets/ferrets/mouse/08.jpg";
import mouseImage9 from "../assets/ferrets/mouse/09.jpg";
import mouseImage10 from "../assets/ferrets/mouse/10.jpg";
import mouseImage11 from "../assets/ferrets/mouse/11.jpg";
import mouseImage12 from "../assets/ferrets/mouse/12.jpg";
import mouseImage13 from "../assets/ferrets/mouse/13.jpg";
import mouseImage14 from "../assets/ferrets/mouse/14.jpg";
import mouseImage15 from "../assets/ferrets/mouse/15.jpg";
import mouseImage16 from "../assets/ferrets/mouse/16.jpg";
import mouseImage17 from "../assets/ferrets/mouse/17.jpg";
import mouseImage18 from "../assets/ferrets/mouse/18.png";
import mouseImage19 from "../assets/ferrets/mouse/19.jpg";
import mouseImage20 from "../assets/ferrets/mouse/20.jpg";
import mouseImage21 from "../assets/ferrets/mouse/21.jpg";
import mouseImage22 from "../assets/ferrets/mouse/22.jpg";
import mouseImage23 from "../assets/ferrets/mouse/23.jpg";
import mouseImage24 from "../assets/ferrets/mouse/24.jpg";
import mouseImage25 from "../assets/ferrets/mouse/25.jpg";
import mouseImage26 from "../assets/ferrets/mouse/26.jpg";
import mouseImage27 from "../assets/ferrets/mouse/27.jpg";
import mouseImage28 from "../assets/ferrets/mouse/28.png";
import mouseImage29 from "../assets/ferrets/mouse/29.jpg";
import mouseImage30 from "../assets/ferrets/mouse/30.jpg";
import mouseImage31 from "../assets/ferrets/mouse/31.jpg";
import moxieImage1 from "../assets/ferrets/moxie/01.jpg";
import moxieImage2 from "../assets/ferrets/moxie/02.jpg";
import moxieImage3 from "../assets/ferrets/moxie/03.jpg";
import moxieImage4 from "../assets/ferrets/moxie/04.jpg";
import moxieImage5 from "../assets/ferrets/moxie/05.jpg";
import moxieImage6 from "../assets/ferrets/moxie/06.jpg";
import moxieImage7 from "../assets/ferrets/moxie/07.jpg";
import moxieImage8 from "../assets/ferrets/moxie/08.jpg";
import moxieImage9 from "../assets/ferrets/moxie/09.jpg";
import moxieImage10 from "../assets/ferrets/moxie/10.jpg";
import moxieImage11 from "../assets/ferrets/moxie/11.jpg";
import moxieImage12 from "../assets/ferrets/moxie/12.jpg";
import moxieImage13 from "../assets/ferrets/moxie/13.jpg";
import nachoImage1 from "../assets/ferrets/nacho/01.jpg";
import nachoImage2 from "../assets/ferrets/nacho/02.jpg";
import nachoImage3 from "../assets/ferrets/nacho/03.jpg";
import nachoImage4 from "../assets/ferrets/nacho/04.jpg";
import nachoImage5 from "../assets/ferrets/nacho/05.jpg";
import nachoImage6 from "../assets/ferrets/nacho/06.jpg";
import nachoImage7 from "../assets/ferrets/nacho/07.jpg";
import nachoImage8 from "../assets/ferrets/nacho/08.jpg";
import nachoImage9 from "../assets/ferrets/nacho/09.jpg";
import nachoImage10 from "../assets/ferrets/nacho/10.jpg";
import nachoImage11 from "../assets/ferrets/nacho/11.jpg";
import nachoImage12 from "../assets/ferrets/nacho/12.jpg";
import nachoImage13 from "../assets/ferrets/nacho/13.jpg";
import nachoImage14 from "../assets/ferrets/nacho/14.jpg";
import odinImage1 from "../assets/ferrets/odin/01.jpg";
import odinImage2 from "../assets/ferrets/odin/02.jpg";
import odinImage3 from "../assets/ferrets/odin/03.jpg";
import odinImage4 from "../assets/ferrets/odin/04.jpg";
import odinImage5 from "../assets/ferrets/odin/05.png";
import onionImage1 from "../assets/ferrets/onion/01.jpg";
import onionImage2 from "../assets/ferrets/onion/02.jpg";
import onionImage3 from "../assets/ferrets/onion/03.jpg";
import onionImage4 from "../assets/ferrets/onion/04.jpg";
import onionImage5 from "../assets/ferrets/onion/05.jpg";
import onionImage6 from "../assets/ferrets/onion/06.png";
import onionImage7 from "../assets/ferrets/onion/07.jpg";
import onionImage8 from "../assets/ferrets/onion/08.jpg";
import onionImage9 from "../assets/ferrets/onion/09.jpg";
import onionImage10 from "../assets/ferrets/onion/10.jpg";
import onionImage11 from "../assets/ferrets/onion/11.jpg";
import onionImage12 from "../assets/ferrets/onion/12.jpg";
import onionImage13 from "../assets/ferrets/onion/13.gif";
import peanutImage1 from "../assets/ferrets/peanut/01.jpg";
import peanutImage2 from "../assets/ferrets/peanut/02.jpg";
import peanutImage3 from "../assets/ferrets/peanut/03.jpg";
import peanutImage4 from "../assets/ferrets/peanut/04.jpg";
import peanutImage5 from "../assets/ferrets/peanut/05.jpg";
import peanutImage6 from "../assets/ferrets/peanut/06.jpg";
import peanutImage7 from "../assets/ferrets/peanut/07.jpg";
import peanutImage8 from "../assets/ferrets/peanut/08.jpg";
import peanutImage9 from "../assets/ferrets/peanut/09.jpg";
import peanutImage10 from "../assets/ferrets/peanut/10.jpg";
import peanutImage11 from "../assets/ferrets/peanut/11.jpg";
import peanutImage12 from "../assets/ferrets/peanut/12.jpg";
import peanutImage13 from "../assets/ferrets/peanut/13.jpg";
import peanutImage14 from "../assets/ferrets/peanut/14.jpg";
import peanutImage15 from "../assets/ferrets/peanut/15.jpeg";
import peanutImage16 from "../assets/ferrets/peanut/16.jpeg";
import peanutImage17 from "../assets/ferrets/peanut/17.jpeg";
import peanutImage18 from "../assets/ferrets/peanut/18.jpg";
import peanutImage19 from "../assets/ferrets/peanut/19.jpg";
import peanutImage20 from "../assets/ferrets/peanut/20.jpg";
import peanutImage21 from "../assets/ferrets/peanut/21.jpg";
import peanutImage22 from "../assets/ferrets/peanut/22.jpg";
import peanutImage23 from "../assets/ferrets/peanut/23.jpg";
import peanutImage24 from "../assets/ferrets/peanut/24.jpg";
import peanutImage25 from "../assets/ferrets/peanut/25.jpg";
import peanutImage26 from "../assets/ferrets/peanut/26.jpg";
import peanutImage27 from "../assets/ferrets/peanut/27.jpg";
import peanutImage28 from "../assets/ferrets/peanut/28.jpeg";
import peanutImage29 from "../assets/ferrets/peanut/29.jpg";
import peanutImage30 from "../assets/ferrets/peanut/30.jpg";
import peanut2Image1 from "../assets/ferrets/peanut2/01.png";
import peanut2Image2 from "../assets/ferrets/peanut2/02.png";
import peanut2Image3 from "../assets/ferrets/peanut2/03.jpg";
import peanut2Image4 from "../assets/ferrets/peanut2/04.jpg";
import peanut2Image5 from "../assets/ferrets/peanut2/05.jpg";
import peanut2Image6 from "../assets/ferrets/peanut2/06.png";
import peanut2Image7 from "../assets/ferrets/peanut2/07.png";
import peanut2Image8 from "../assets/ferrets/peanut2/08.png";
import peanut2Image9 from "../assets/ferrets/peanut2/09.png";
import peanut2Image10 from "../assets/ferrets/peanut2/10.png";
import peanut2Image11 from "../assets/ferrets/peanut2/11.png";
import peanut2Image12 from "../assets/ferrets/peanut2/12.png";
import peepoImage1 from "../assets/ferrets/peepo/01.jpg";
import peepoImage2 from "../assets/ferrets/peepo/02.jpg";
import peepoImage3 from "../assets/ferrets/peepo/03.jpg";
import peepoImage4 from "../assets/ferrets/peepo/04.jpg";
import peepoImage5 from "../assets/ferrets/peepo/05.jpg";
import peepoImage6 from "../assets/ferrets/peepo/06.jpg";
import peepoImage7 from "../assets/ferrets/peepo/07.jpg";
import peepoImage8 from "../assets/ferrets/peepo/08.jpg";
import peepoImage9 from "../assets/ferrets/peepo/09.jpg";
import peepoImage10 from "../assets/ferrets/peepo/10.jpg";
import peepoImage11 from "../assets/ferrets/peepo/11.jpg";
import peepoImage12 from "../assets/ferrets/peepo/12.jpg";
import peepoImage13 from "../assets/ferrets/peepo/13.jpg";
import peepoImage14 from "../assets/ferrets/peepo/14.jpg";
import pepperImage1 from "../assets/ferrets/pepper/01.jpg";
import pepperImage2 from "../assets/ferrets/pepper/02.jpg";
import pepperImage3 from "../assets/ferrets/pepper/03.jpg";
import pepperImage4 from "../assets/ferrets/pepper/04.jpg";
import pepperImage5 from "../assets/ferrets/pepper/05.jpg";
import pepperImage6 from "../assets/ferrets/pepper/06.jpg";
import pepperImage7 from "../assets/ferrets/pepper/07.jpg";
import pepperImage8 from "../assets/ferrets/pepper/08.jpg";
import pepperImage9 from "../assets/ferrets/pepper/09.jpg";
import pepperImage10 from "../assets/ferrets/pepper/10.jpg";
import pepperImage11 from "../assets/ferrets/pepper/11.jpg";
import pepper2Image1 from "../assets/ferrets/pepper2/01.png";
import pepper2Image2 from "../assets/ferrets/pepper2/02.jpg";
import pepper2Image3 from "../assets/ferrets/pepper2/03.jpg";
import pepper2Image4 from "../assets/ferrets/pepper2/04.jpg";
import pickleImage1 from "../assets/ferrets/pickle/01.jpg";
import pickleImage2 from "../assets/ferrets/pickle/02.jpg";
import pickleImage3 from "../assets/ferrets/pickle/03.png";
import pickleImage4 from "../assets/ferrets/pickle/04.png";
import pickleImage5 from "../assets/ferrets/pickle/05.jpg";
import pickleImage6 from "../assets/ferrets/pickle/06.png";
import pickleImage7 from "../assets/ferrets/pickle/07.jpg";
import pickleImage8 from "../assets/ferrets/pickle/08.jpg";
import pickleImage9 from "../assets/ferrets/pickle/09.jpg";
import pickleImage10 from "../assets/ferrets/pickle/10.jpg";
import pickleImage11 from "../assets/ferrets/pickle/11.jpg";
import pickleImage12 from "../assets/ferrets/pickle/12.jpg";
import pickleImage13 from "../assets/ferrets/pickle/13.jpg";
import pickleImage14 from "../assets/ferrets/pickle/14.gif";
import pickleImage15 from "../assets/ferrets/pickle/15.jpg";
import pickleImage16 from "../assets/ferrets/pickle/16.jpg";
import pickleImage17 from "../assets/ferrets/pickle/17.png";
import pickleImage18 from "../assets/ferrets/pickle/18.jpg";
import pickleImage19 from "../assets/ferrets/pickle/19.jpg";
import pickleImage20 from "../assets/ferrets/pickle/20.jpg";
import pickleImage21 from "../assets/ferrets/pickle/21.gif";
import pickleImage22 from "../assets/ferrets/pickle/22.jpg";
import pickleImage23 from "../assets/ferrets/pickle/23.jpg";
import pickleImage24 from "../assets/ferrets/pickle/24.png";
import pickleImage25 from "../assets/ferrets/pickle/25.jpg";
import pickleImage26 from "../assets/ferrets/pickle/26.jpg";
import pickleImage27 from "../assets/ferrets/pickle/27.jpg";
import pickleImage28 from "../assets/ferrets/pickle/28.png";
import pickleImage29 from "../assets/ferrets/pickle/29.jpg";
import pickleImage30 from "../assets/ferrets/pickle/30.jpg";
import pickleImage31 from "../assets/ferrets/pickle/31.jpg";
import pickleImage32 from "../assets/ferrets/pickle/32.jpg";
import pickleImage33 from "../assets/ferrets/pickle/33.jpg";
import pickleImage34 from "../assets/ferrets/pickle/34.jpg";
import pickleImage35 from "../assets/ferrets/pickle/35.jpg";
import pickleImage36 from "../assets/ferrets/pickle/36.jpg";
import pickleImage37 from "../assets/ferrets/pickle/37.jpg";
import pickleImage38 from "../assets/ferrets/pickle/38.jpg";
import pickleImage39 from "../assets/ferrets/pickle/39.jpg";
import pickleImage40 from "../assets/ferrets/pickle/40.jpg";
import pickleImage41 from "../assets/ferrets/pickle/41.jpg";
import roxyImage1 from "../assets/ferrets/roxy/01.jpg";
import roxyImage2 from "../assets/ferrets/roxy/02.jpg";
import roxyImage3 from "../assets/ferrets/roxy/03.jpg";
import roxyImage4 from "../assets/ferrets/roxy/04.jpg";
import rustyImage1 from "../assets/ferrets/rusty/01.jpg";
import rustyImage2 from "../assets/ferrets/rusty/02.jpg";
import rustyImage3 from "../assets/ferrets/rusty/03.jpg";
import rustyImage4 from "../assets/ferrets/rusty/04.jpg";
import rustyImage5 from "../assets/ferrets/rusty/05.jpg";
import rustyImage6 from "../assets/ferrets/rusty/06.jpg";
import rustyImage7 from "../assets/ferrets/rusty/07.jpg";
import rustyImage8 from "../assets/ferrets/rusty/08.jpg";
import rustyImage9 from "../assets/ferrets/rusty/09.jpg";
import rustyImage10 from "../assets/ferrets/rusty/10.jpg";
import rustyImage11 from "../assets/ferrets/rusty/11.jpg";
import rustyImage12 from "../assets/ferrets/rusty/12.jpg";
import rustyImage13 from "../assets/ferrets/rusty/13.jpg";
import rustyImage14 from "../assets/ferrets/rusty/14.jpg";
import rustyImage15 from "../assets/ferrets/rusty/15.jpg";
import rustyImage16 from "../assets/ferrets/rusty/16.jpg";
import saiImage1 from "../assets/ferrets/sai/01.jpg";
import saiImage2 from "../assets/ferrets/sai/02.jpg";
import salsaImage1 from "../assets/ferrets/salsa/01.jpg";
import salsaImage2 from "../assets/ferrets/salsa/02.jpg";
import salsaImage3 from "../assets/ferrets/salsa/03.jpg";
import salsaImage4 from "../assets/ferrets/salsa/04.jpg";
import salsaImage5 from "../assets/ferrets/salsa/05.jpg";
import salsaImage6 from "../assets/ferrets/salsa/06.jpg";
import salsaImage7 from "../assets/ferrets/salsa/07.jpg";
import salsaImage8 from "../assets/ferrets/salsa/08.jpg";
import saltImage1 from "../assets/ferrets/salt/01.jpg";
import saltImage2 from "../assets/ferrets/salt/02.jpg";
import saltImage3 from "../assets/ferrets/salt/03.jpg";
import saltImage4 from "../assets/ferrets/salt/04.jpg";
import saltImage5 from "../assets/ferrets/salt/05.jpg";
import saltImage6 from "../assets/ferrets/salt/06.jpeg";
import salt2Image1 from "../assets/ferrets/salt2/01.jpg";
import salt2Image2 from "../assets/ferrets/salt2/02.jpg";
import salt2Image3 from "../assets/ferrets/salt2/03.jpg";
import scotchImage1 from "../assets/ferrets/scotch/01.jpg";
import scotchImage2 from "../assets/ferrets/scotch/02.jpg";
import scotchImage3 from "../assets/ferrets/scotch/03.jpg";
import scotchImage4 from "../assets/ferrets/scotch/04.jpg";
import scotchImage5 from "../assets/ferrets/scotch/05.jpg";
import scotchImage6 from "../assets/ferrets/scotch/06.jpg";
import scotchImage7 from "../assets/ferrets/scotch/07.jpg";
import scotchImage8 from "../assets/ferrets/scotch/08.jpg";
import scotchImage9 from "../assets/ferrets/scotch/09.jpg";
import scotchImage10 from "../assets/ferrets/scotch/10.jpg";
import scotchImage11 from "../assets/ferrets/scotch/11.jpg";
import scotchImage12 from "../assets/ferrets/scotch/12.jpg";
import snailsImage1 from "../assets/ferrets/snails/01.jpg";
import snailsImage2 from "../assets/ferrets/snails/02.jpg";
import snailsImage3 from "../assets/ferrets/snails/03.jpg";
import snailsImage4 from "../assets/ferrets/snails/04.jpg";
import snailsImage5 from "../assets/ferrets/snails/05.jpg";
import snailsImage6 from "../assets/ferrets/snails/06.jpg";
import snailsImage7 from "../assets/ferrets/snails/07.jpg";
import snailsImage8 from "../assets/ferrets/snails/08.png";
import snailsImage9 from "../assets/ferrets/snails/09.jpg";
import snailsImage10 from "../assets/ferrets/snails/10.gif";
import snailsImage11 from "../assets/ferrets/snails/11.jpg";
import snailsImage12 from "../assets/ferrets/snails/12.jpg";
import snailsImage13 from "../assets/ferrets/snails/13.jpg";
import snailsImage14 from "../assets/ferrets/snails/14.gif";
import snailsImage15 from "../assets/ferrets/snails/15.jpg";
import snailsImage16 from "../assets/ferrets/snails/16.jpg";
import snailsImage17 from "../assets/ferrets/snails/17.jpg";
import snailsImage18 from "../assets/ferrets/snails/18.jpg";
import snailsImage19 from "../assets/ferrets/snails/19.jpg";
import snailsImage20 from "../assets/ferrets/snails/20.jpg";
import snailsImage21 from "../assets/ferrets/snails/21.jpg";
import snowballImage1 from "../assets/ferrets/snowball/01.jpg";
import spudImage1 from "../assets/ferrets/spud/01.jpg";
import spudImage2 from "../assets/ferrets/spud/02.jpg";
import spudImage3 from "../assets/ferrets/spud/03.jpg";
import spudImage4 from "../assets/ferrets/spud/04.jpg";
import spudImage5 from "../assets/ferrets/spud/05.jpg";
import spudImage6 from "../assets/ferrets/spud/06.jpg";
import teepImage1 from "../assets/ferrets/teep/01.jpg";
import teepImage2 from "../assets/ferrets/teep/02.jpg";
import teepImage3 from "../assets/ferrets/teep/03.jpg";
import teepImage4 from "../assets/ferrets/teep/04.jpg";
import teepImage5 from "../assets/ferrets/teep/05.jpg";
import teepImage6 from "../assets/ferrets/teep/06.jpg";
import teepImage7 from "../assets/ferrets/teep/07.jpg";
import teepImage8 from "../assets/ferrets/teep/08.jpg";
import thelmaImage1 from "../assets/ferrets/thelma/01.jpg";
import thelmaImage2 from "../assets/ferrets/thelma/02.jpg";
import tobyImage1 from "../assets/ferrets/toby/01.png";
import tobyImage2 from "../assets/ferrets/toby/02.jpg";
import tobyImage3 from "../assets/ferrets/toby/03.jpg";
import tobyImage4 from "../assets/ferrets/toby/04.jpg";
import tobyImage5 from "../assets/ferrets/toby/05.jpg";
import tobyImage6 from "../assets/ferrets/toby/06.jpg";
import tobyImage7 from "../assets/ferrets/toby/07.jpg";
import tobyImage8 from "../assets/ferrets/toby/08.jpg";
import tobyImage9 from "../assets/ferrets/toby/09.jpg";
import tobyImage10 from "../assets/ferrets/toby/10.jpg";
import tobyImage11 from "../assets/ferrets/toby/11.jpg";
import tobyImage12 from "../assets/ferrets/toby/12.jpg";
import tobyImage13 from "../assets/ferrets/toby/13.jpg";
import tobyImage14 from "../assets/ferrets/toby/14.jpg";
import tobyImage15 from "../assets/ferrets/toby/15.jpg";
import tobyImage16 from "../assets/ferrets/toby/16.jpg";
import torchImage1 from "../assets/ferrets/torch/01.jpg";
import torchImage2 from "../assets/ferrets/torch/02.jpg";
import torchImage3 from "../assets/ferrets/torch/03.jpg";
import torchImage4 from "../assets/ferrets/torch/04.jpg";
import torchImage5 from "../assets/ferrets/torch/05.jpg";
import torchImage6 from "../assets/ferrets/torch/06.jpg";
import torchImage7 from "../assets/ferrets/torch/07.jpg";
import torchImage8 from "../assets/ferrets/torch/08.jpg";
import torchImage9 from "../assets/ferrets/torch/09.jpg";
import torchImage10 from "../assets/ferrets/torch/10.png";
import torchImage11 from "../assets/ferrets/torch/11.jpeg";
import torchImage12 from "../assets/ferrets/torch/12.jpg";
import torchImage13 from "../assets/ferrets/torch/13.jpg";
import torchImage14 from "../assets/ferrets/torch/14.jpg";
import torchImage15 from "../assets/ferrets/torch/15.jpg";
import torchImage16 from "../assets/ferrets/torch/16.jpg";
import torchImage17 from "../assets/ferrets/torch/17.jpg";
import torchImage18 from "../assets/ferrets/torch/18.jpg";
import torchImage19 from "../assets/ferrets/torch/19.jpg";
import torchImage20 from "../assets/ferrets/torch/20.jpg";
import tortillaImage1 from "../assets/ferrets/tortilla/01.jpg";
import tortillaImage2 from "../assets/ferrets/tortilla/02.jpeg";
import tortillaImage3 from "../assets/ferrets/tortilla/03.jpg";
import tortillaImage4 from "../assets/ferrets/tortilla/04.jpg";
import tortillaImage5 from "../assets/ferrets/tortilla/05.jpg";
import tortillaImage6 from "../assets/ferrets/tortilla/06.jpg";
import tortillaImage7 from "../assets/ferrets/tortilla/07.jpg";
import tortillaImage8 from "../assets/ferrets/tortilla/08.png";
import vincentImage1 from "../assets/ferrets/vincent/01.jpg";
import vincentImage2 from "../assets/ferrets/vincent/02.jpg";
import vincentImage3 from "../assets/ferrets/vincent/03.jpg";
import vincentImage4 from "../assets/ferrets/vincent/04.jpeg";
import vincentImage5 from "../assets/ferrets/vincent/05.jpeg";
import vincentImage6 from "../assets/ferrets/vincent/06.jpeg";
import vincentImage7 from "../assets/ferrets/vincent/07.jpeg";
import vincentImage8 from "../assets/ferrets/vincent/08.jpeg";
import vincentImage9 from "../assets/ferrets/vincent/09.jpeg";
import vincentImage10 from "../assets/ferrets/vincent/10.jpeg";
import vincentImage11 from "../assets/ferrets/vincent/11.jpeg";
import vincentImage12 from "../assets/ferrets/vincent/12.jpeg";
import vincentImage13 from "../assets/ferrets/vincent/13.jpeg";
import vincentImage14 from "../assets/ferrets/vincent/14.jpeg";
import vincentImage15 from "../assets/ferrets/vincent/15.jpg";
import vincentImage16 from "../assets/ferrets/vincent/16.png";
import vincentImage17 from "../assets/ferrets/vincent/17.jpg";
import vincentImage18 from "../assets/ferrets/vincent/18.jpg";
import vincentImage19 from "../assets/ferrets/vincent/19.jpg";
import vincentImage20 from "../assets/ferrets/vincent/20.jpeg";
import vincentImage21 from "../assets/ferrets/vincent/21.jpg";
import whiskeyImage1 from "../assets/ferrets/whiskey/01.jpg";
import whiskeyImage2 from "../assets/ferrets/whiskey/02.jpg";
import whiskeyImage3 from "../assets/ferrets/whiskey/03.jpg";
import whiskeyImage4 from "../assets/ferrets/whiskey/04.jpg";
import whiskeyImage5 from "../assets/ferrets/whiskey/05.jpg";
import whiskeyImage6 from "../assets/ferrets/whiskey/06.jpg";
import whiskeyImage7 from "../assets/ferrets/whiskey/07.jpg";
import zeroImage1 from "../assets/ferrets/zero/01.jpg";
import zeroImage2 from "../assets/ferrets/zero/02.jpg";
import zeroImage3 from "../assets/ferrets/zero/03.jpg";
import zeroImage4 from "../assets/ferrets/zero/04.jpg";
import zeroImage5 from "../assets/ferrets/zero/05.jpg";
import zeroImage6 from "../assets/ferrets/zero/06.jpg";
import zeroImage7 from "../assets/ferrets/zero/07.jpg";
import zeroImage8 from "../assets/ferrets/zero/08.jpg";
import zeroImage9 from "../assets/ferrets/zero/09.jpg";
import zeroImage10 from "../assets/ferrets/zero/10.jpg";
import zeroImage11 from "../assets/ferrets/zero/11.jpg";
import zeroImage12 from "../assets/ferrets/zero/12.jpg";
import zeroImage13 from "../assets/ferrets/zero/13.jpg";
import zeroImage14 from "../assets/ferrets/zero/14.jpg";
import zeroImage15 from "../assets/ferrets/zero/15.jpg";
import zeroImage16 from "../assets/ferrets/zero/16.jpg";
import zeroImage17 from "../assets/ferrets/zero/17.jpg";
import zeroImage18 from "../assets/ferrets/zero/18.jpg";
import zeroImage19 from "../assets/ferrets/zero/19.jpg";
import zeroImage20 from "../assets/ferrets/zero/20.jpg";
import zeroImage21 from "../assets/ferrets/zero/21.jpg";
import zeroImage22 from "../assets/ferrets/zero/22.jpg";
import zeroImage23 from "../assets/ferrets/zero/23.jpg";
import zeroImage24 from "../assets/ferrets/zero/24.jpg";
import zeroImage25 from "../assets/ferrets/zero/25.jpg";
import zeroImage26 from "../assets/ferrets/zero/26.jpg";
import zeroImage27 from "../assets/ferrets/zero/27.jpg";

import beansYarrAww from "../assets/ferrets/beans/yarrAww.png";
import beansYarrBeans from "../assets/ferrets/beans/yarrBeans.png";
import beansYarrBite from "../assets/ferrets/beans/yarrBite.gif";
import beansYarrBluh from "../assets/ferrets/beans/yarrBluh.gif";
import beansYarrBrows from "../assets/ferrets/beans/yarrBrows.gif";
import beansYarrChaos from "../assets/ferrets/beans/yarrChaos.gif";
import beansYarrChatMD from "../assets/ferrets/beans/yarrChatMD.png";
import beansYarrComfy from "../assets/ferrets/beans/yarrComfy.gif";
import beansYarrCult from "../assets/ferrets/beans/yarrCult.gif";
import beansYarrCultist from "../assets/ferrets/beans/yarrCultist.png";
import beansYarrD from "../assets/ferrets/beans/yarrD.png";
import beansYarrDance from "../assets/ferrets/beans/yarrDance.gif";
import beansYarrDemocracy from "../assets/ferrets/beans/yarrDemocracy.gif";
import beansYarrFear from "../assets/ferrets/beans/yarrFear.png";
import beansYarrFine from "../assets/ferrets/beans/yarrFine.gif";
import beansYarrHey from "../assets/ferrets/beans/yarrHey.gif";
import beansYarrHmm from "../assets/ferrets/beans/yarrHmm.gif";
import beansYarrHype from "../assets/ferrets/beans/yarrHype.gif";
import beansYarrLick from "../assets/ferrets/beans/yarrLick.png";
import beansYarrLook from "../assets/ferrets/beans/yarrLook.png";
import beansYarrLove from "../assets/ferrets/beans/yarrLove.gif";
import beansYarrLUL from "../assets/ferrets/beans/yarrLUL.png";
import beansYarrMYAA from "../assets/ferrets/beans/yarrMYAA.gif";
import beansYarrNerd from "../assets/ferrets/beans/yarrNerd.gif";
import beansYarrNodders from "../assets/ferrets/beans/yarrNodders.gif";
import beansYarrNotes from "../assets/ferrets/beans/yarrNotes.png";
import beansYarrPet from "../assets/ferrets/beans/yarrPet.gif";
import beansYarrPrime from "../assets/ferrets/beans/yarrPrime.gif";
import beansYarrRabid from "../assets/ferrets/beans/yarrRabid.gif";
import beansYarrRad from "../assets/ferrets/beans/yarrRad.png";
import beansYarrSadge from "../assets/ferrets/beans/yarrSadge.gif";
import beansYarrSalute from "../assets/ferrets/beans/yarrSalute.png";
import beansYarrSip from "../assets/ferrets/beans/yarrSip.png";
import beansYarrSpicy from "../assets/ferrets/beans/yarrSpicy.png";
import beansYarrStinks from "../assets/ferrets/beans/yarrStinks.gif";
import beansYarrStinky from "../assets/ferrets/beans/yarrStinky.gif";
import beansYarrStonks from "../assets/ferrets/beans/yarrStonks.gif";
import beansYarrWave from "../assets/ferrets/beans/yarrWave.gif";
import beansYarrWhy from "../assets/ferrets/beans/yarrWhy.gif";
import beansYarrWOW from "../assets/ferrets/beans/yarrWOW.gif";
import luckyDookSniff from "../assets/ferrets/lucky/dookSniff.png";
import mouseDookHype from "../assets/ferrets/mouse/dookHype.png";
import mouseDookLurk from "../assets/ferrets/mouse/dookLurk.png";
import pickleDookReally from "../assets/ferrets/pickle/dookReally.png";
import pickleYarrBongos from "../assets/ferrets/pickle/yarrBongos.gif";
import pickleYarrGlue from "../assets/ferrets/pickle/yarrGlue.png";
import pickleYarrGrass from "../assets/ferrets/pickle/yarrGrass.gif";
import snailsYarrDumpy from "../assets/ferrets/snails/yarrDumpy.gif";
import vincentDookThink from "../assets/ferrets/vincent/dookThink.gif";

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Percentage = `${ZeroToNine}%` | `${OneToNine}${ZeroToNine}%` | "100%";
type Position = `${Percentage} ${Percentage}`;

const isPercentage = (str: string): str is Percentage =>
  /^(100|[1-9]?[0-9])%$/.test(str);
const isPosition = (str: string): str is Position => {
  const [x, y, ...rest] = str.split(" ");
  return rest.length === 0 && !!x && !!y && isPercentage(x) && isPercentage(y);
};

type ImagePng = (typeof import("*.png"))["default"];
type ImageJpg = (typeof import("*.jpg"))["default"];
type ImageJpeg = (typeof import("*.jpeg"))["default"];
type ImageImport = ImagePng | ImageJpg | ImageJpeg;

// Manually set the type of the schema to avoid TS inferring `ImageImport` and `Position`
// We want `ImageImport` to retain its original type using `import` calls
// And we want `Position` to not be expanded into a massive union literal type
type ZodImageObject = z.ZodObject<{
  src: z.ZodType<ImageImport>;
  alt: z.ZodString;
  position: z.ZodOptional<z.ZodCustom<Position>>;
}>;

const isPositionSchema = z.custom<Position>(
  (val) => typeof val === "string" && isPosition(val),
  "must be a valid position string with two percentage values",
);

export const ferretImageSchema: ZodImageObject = z.object({
  src: z.custom<ImageImport>(),
  alt: z.string(),
  position: isPositionSchema.optional(),
});

export type FerretImage = z.infer<typeof ferretImageSchema>;
export type FerretImages = [FerretImage, ...FerretImage[]];

const ferretImages: Partial<{
  [key in FerretKey]: FerretImages;
}> = {
  badger: [
    {
      src: badgerImage1,
      alt: "Badger pretend to be a shark in the bal-pit",
    },
    {
      src: badgerImage2,
      alt: "Badger in ball-pit",
    },
    {
      src: badgerImage3,
      alt: "Eepy Badger",
    },
    {
      src: badgerImage4,
      alt: "Curious Badger",
    },
    {
      src: badgerImage5,
      alt: "Curly Badger",
    },
    {
      src: badgerImage6,
      alt: "Badger, Mushroom and a Snake",
    },
    {
      src: badgerImage7,
      alt: "Badger in a box of rice",
    },
    {
      src: badgerImage8,
      alt: "Badger Vampire Moment",
    },
    {
      src: badgerImage9,
      alt: "Sleepy Badger",
    },
    {
      src: badgerImage10,
      alt: "Badger looking like a badger",
    },
    {
      src: badgerImage11,
      alt: "Badger splooting",
    },
    {
      src: badgerImage12,
      alt: "Badger and Peepo zonked after playtime",
    },
  ],
  bagel: [
    {
      src: bagelImage1,
      alt: "Sleepy Bagel Headshot 1",
    },
    {
      src: bagelImage2,
      alt: "Sleepy Bagel Headshot 2",
    },
    {
      src: bagelImage3,
      alt: "Sleepy Bagel Headshot 3",
    },
    {
      src: bagelImage4,
      alt: "Shaye holds Bagel's head",
    },
    {
      src: bagelImage5,
      alt: "Bagel snooze on the pizza",
    },
    {
      src: bagelImage6,
      alt: "Bagle sleeping on sofa",
    },
    {
      src: bagelImage7,
      alt: "Bagel asleep in the cloud bed",
    },
    {
      src: bagelImage8,
      alt: "Bagel hold by Maddie",
    },
    {
      src: bagelImage9,
      alt: "Bagel sleeps on Peanut 2",
    },
    {
      src: bagelImage10,
      alt: "Peanut 2, Bagel, and Pepper 2 at the soop",
    },
  ],
  banana: [
    {
      src: bananaImage1,
      alt: "Banana in blanket",
    },
    {
      src: bananaImage2,
      alt: "Banana drawing by Shaye",
    },
    {
      src: bananaImage3,
      alt: "Banana in the Mango",
    },
    {
      src: bananaImage4,
      alt: "Banana touching grass pt.1",
    },
    {
      src: bananaImage5,
      alt: "Banana touching grass pt.2",
    },
    {
      src: bananaImage6,
      alt: "Banana sniffah grass",
    },
    {
      src: bananaImage7,
      alt: "Banana with a flower",
    },
    {
      src: bananaImage8,
      alt: "Banana chills in cat-tree",
    },
    {
      src: bananaImage9,
      alt: "Banana locked in",
    },
    {
      src: bananaImage10,
      alt: "Banana is a toy",
    },
    {
      src: bananaImage11,
      alt: "Banana in bag",
    },
    {
      src: bananaImage12,
      alt: "Banana and Eddie cuddle",
    },
    {
      src: bananaImage13,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
    },
    {
      src: bananaImage14,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: bananaImage15,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: bananaImage16,
      alt: "Banana and Loki taking a bath",
    },
    {
      src: bananaImage17,
      alt: "Banana and Rusty eating stick together",
    },
  ],
  bandit: [
    {
      src: banditImage1,
      alt: "Bandit being cute, might wiggle",
    },
    {
      src: banditImage2,
      alt: "Bandit getting all the noms",
    },
    {
      src: banditImage3,
      alt: "Sleepy boi Bandit",
    },
    {
      src: banditImage4,
      alt: "Sweater for Bandit",
    },
    {
      src: banditImage5,
      alt: "Bandit poops on Latte",
    },
    {
      src: banditImage6,
      alt: "Bandit and Moxie nom some kibble",
    },
  ],
  beans: [
    {
      src: beansImage1,
      alt: "Baby Beans",
    },
    {
      src: beansImage2,
      alt: "Cute baby Beans",
    },
    {
      src: beansImage3,
      alt: "Chonky Beans",
    },
    {
      src: beansImage4,
      alt: "Beans Drawing by Shaye",
    },
    {
      src: beansImage5,
      alt: "Beans Jail",
    },
    {
      src: beansImage6,
      alt: "Beans having snuck into genpop is busted by Shaye",
    },
    {
      src: beansImage7,
      alt: "Beans hunts squeaky toy from cage",
    },
    {
      src: beansImage8,
      alt: "Your a wizard Beans.",
    },
    {
      src: beansImage9,
      alt: "Beanus Weanus",
    },
    {
      src: beansImage10,
      alt: "Wizard Hat Beans",
    },
    {
      src: beansImage11,
      alt: "Beans attack the snek 2",
    },
    {
      src: beansImage12,
      alt: "Beans attack the snek",
    },
    {
      src: beansImage13,
      alt: "Beware of Beans",
    },
    {
      src: beansImage14,
      alt: "Beans is chill",
    },
    {
      src: beansImage15,
      alt: "Chonky boi Beans",
    },
    {
      src: beansImage16,
      alt: "Beans cleans",
    },
    {
      src: beansImage17,
      alt: "Beans cuddle with Shaye",
    },
    {
      src: beansImage18,
      alt: "Pumpkin spice Beans",
    },
    {
      src: beansImage19,
      alt: "Beans with toy",
    },
    {
      src: beansImage20,
      alt: "Beans dreams",
    },
    {
      src: beansImage21,
      alt: "Beans being a fatass",
    },
    {
      src: beansImage22,
      alt: "Big Beans",
    },
    {
      src: beansImage23,
      alt: "Beans is liquid, drawing by Shaye",
    },
    {
      src: beansImage24,
      alt: "Beans Mlem 2",
    },
    {
      src: beansImage25,
      alt: "Beans Mlem",
    },
    {
      src: beansImage26,
      alt: "Photogenic Beans",
    },
    {
      src: beansImage27,
      alt: "Beans playing with the color string",
    },
    {
      src: beansImage28,
      alt: "Beans plotting and scheming",
    },
    {
      src: beansImage29,
      alt: "Beans enjoying the sun",
    },
    {
      src: beansImage30,
      alt: "Beans the dumbass drawing by Shaye",
    },
    {
      src: beansImage31,
      alt: "Long Beans!",
    },
    {
      src: beansImage32,
      alt: "Beans after a bath",
    },
    {
      src: beansImage33,
      alt: "Beans sleeping in Superman position",
    },
    {
      src: beansImage34,
      alt: "Beans, Beef, Cheese, Loki, Snails visit wet-world",
    },
    {
      src: beansImage35,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
    {
      src: beansImage36,
      alt: "Eddie poops on Beans * (And Short Link )",
    },
    {
      src: beansImage37,
      alt: "Beans getting kissies by Mouse",
    },
    {
      src: beansImage38,
      alt: "Beans and Onion drawing by Shaye",
    },
    {
      src: beansImage39,
      alt: "Beans laying on Onion",
    },
    {
      src: beansImage40,
      alt: "Beans and Onion snake mode drawing by Spice Link",
    },
    {
      src: beansImage41,
      alt: "Beans cuddle with Onion and Grandpa",
    },
    {
      src: beansImage42,
      alt: "Peanut demands the sun spot from Beans",
    },
    {
      src: beansImage43,
      alt: "Peanut has been spotted by Beans",
    },
    {
      src: beansImage44,
      alt: "Peanut, Beans: Whaaaaagghh!",
    },
    {
      src: beansImage45,
      alt: "Beans and Peanut share a penthouse",
    },
    {
      src: beansImage46,
      alt: "Beans cuddle with Grandpa",
    },
  ],
  beef: [
    {
      src: beefImage1,
      alt: "Beans, Beef, Cheese, Loki, Snails visit wet-world",
    },
    {
      src: beefImage2,
      alt: "Beef sleepy on the couch",
    },
    {
      src: beefImage3,
      alt: "Beef is adorable",
    },
    {
      src: beefImage4,
      alt: "Cute Beef",
    },
    {
      src: beefImage5,
      alt: "Beef Mlem!",
    },
    {
      src: beefImage6,
      alt: "Beef in the petstore",
    },
    {
      src: beefImage7,
      alt: "Beef seasonal receding hairline",
    },
    {
      src: beefImage8,
      alt: "Beef seasonal receding hairline 2",
    },
    {
      src: beefImage9,
      alt: "Beef finger",
    },
    {
      src: beefImage10,
      alt: "Beef on sofa",
    },
    {
      src: beefImage11,
      alt: "Beef snuggle blanky",
    },
    {
      src: beefImage12,
      alt: "Some wet Beef",
    },
    {
      src: beefImage13,
      alt: "Beef and Cheese eepy",
    },
    {
      src: beefImage14,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: beefImage15,
      alt: "Beef and Cheese first pictures",
    },
  ],
  bigmike: [
    {
      src: bigmikeImage1,
      alt: "Big Mike in his bed",
    },
    {
      src: bigmikeImage2,
      alt: "Big Mike climbs his cage",
    },
    {
      src: bigmikeImage3,
      alt: "Smol blep from Big Mike",
    },
  ],
  bruce: [
    {
      src: bruceImage1,
      alt: "Bruce croissant",
    },
    {
      src: bruceImage2,
      alt: "Full Mugshot of Bruce",
    },
    {
      src: bruceImage3,
      alt: "Bruce on toob",
    },
    {
      src: bruceImage4,
      alt: "Bruce confused",
    },
    {
      src: bruceImage5,
      alt: "Bruce sideview",
    },
    {
      src: bruceImage6,
      alt: "Rusty, bruce and hawk pile",
    },
  ],
  cashew: [
    {
      src: cashewImage1,
      alt: "Cash on the flower pt.1",
    },
    {
      src: cashewImage2,
      alt: "Cash on the flower pt.2",
    },
    {
      src: cashewImage3,
      alt: "Cashew with blue wiffle ball",
    },
    {
      src: cashewImage4,
      alt: "Cash ready for action",
    },
    {
      src: cashewImage5,
      alt: "Cash ready for an attention",
    },
    {
      src: cashewImage6,
      alt: "Cashew's short tail",
    },
    {
      src: cashewImage7,
      alt: "Cash toob battle",
    },
    {
      src: cashewImage8,
      alt: "Cash play tunnel ball",
    },
    {
      src: cashewImage9,
      alt: "Cashew with monkey feets",
    },
    {
      src: cashewImage10,
      alt: "Hazel with Cash",
    },
  ],
  cheese: [
    {
      src: cheeseImage1,
      alt: "Beans, Beef, Cheese, Loki, Snails visit wet-world",
    },
    {
      src: cheeseImage2,
      alt: "Beef and Cheese eepy",
    },
    {
      src: cheeseImage3,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: cheeseImage4,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: cheeseImage5,
      alt: "Cheese has a confuse",
    },
    {
      src: cheeseImage6,
      alt: "Cheese on meat pillow",
    },
    {
      src: cheeseImage7,
      alt: "Cheese pouting",
    },
    {
      src: cheeseImage8,
      alt: "Cheese paper bin",
    },
    {
      src: cheeseImage9,
      alt: "Cheese wants hooman attention.",
    },
    {
      src: cheeseImage10,
      alt: "Cheese and lamby",
    },
    {
      src: cheeseImage11,
      alt: "Cheese sleeping on tuna can",
    },
    {
      src: cheeseImage12,
      alt: "Cheese modeling pt.2",
    },
    {
      src: cheeseImage13,
      alt: "Cheese on crotchet basket pt.1",
    },
    {
      src: cheeseImage14,
      alt: "Cheese on crotchet basket pt.2",
    },
    {
      src: cheeseImage15,
      alt: "Cheese wants attention",
    },
    {
      src: cheeseImage16,
      alt: "Cheese on blanky pt.1",
    },
    {
      src: cheeseImage17,
      alt: "Cheese on blanky pt.2",
    },
    {
      src: cheeseImage18,
      alt: "Cheese says hi",
    },
    {
      src: cheeseImage19,
      alt: "Cheese being cute",
    },
    {
      src: cheeseImage20,
      alt: "Cheese modeling pt.1",
    },
    {
      src: cheeseImage21,
      alt: "Cheese roll",
    },
    {
      src: cheeseImage22,
      alt: "Cheese !!",
    },
    {
      src: cheeseImage23,
      alt: "Cheese innocent",
    },
    {
      src: cheeseImage24,
      alt: "Cheese sitting on cat-tree",
    },
    {
      src: cheeseImage25,
      alt: "Cheese modeling on tuna can",
    },
    {
      src: cheeseImage26,
      alt: "Cheese nom brush",
    },
    {
      src: cheeseImage27,
      alt: "Cheese nom",
    },
    {
      src: cheeseImage28,
      alt: "Cheese roll on tuna can",
    },
    {
      src: cheeseImage29,
      alt: "Cheese in the petstore",
    },
    {
      src: cheeseImage30,
      alt: "Cheese on pillow pt.1",
    },
    {
      src: cheeseImage31,
      alt: "Cheese on pillow pt.2",
    },
    {
      src: cheeseImage32,
      alt: "Eepy Cheese in Hammock",
    },
    {
      src: cheeseImage33,
      alt: "Cheese blep",
    },
    {
      src: cheeseImage34,
      alt: "Eepy Cheese",
    },
    {
      src: cheeseImage35,
      alt: "Cheese in bed",
    },
    {
      src: cheeseImage36,
      alt: "Cheese wants sleep",
    },
    {
      src: cheeseImage37,
      alt: "Chonky Cheese",
    },
    {
      src: cheeseImage38,
      alt: "Loki and Cheese at the Vet",
    },
    {
      src: cheeseImage39,
      alt: "Cheese and Lucky at the Gate",
    },
    {
      src: cheeseImage40,
      alt: "Cheese & Mai Tai being divas together",
    },
    {
      src: cheeseImage41,
      alt: "Cheese and Mouse",
    },
    {
      src: cheeseImage42,
      alt: "Young Snails and Cheese",
    },
    {
      src: cheeseImage43,
      alt: "Taco bell cheesy rollup (Cheese and Tito)",
    },
  ],
  chili: [
    {
      src: chiliImage1,
      alt: "Chili likes to play in the trash",
    },
    {
      src: chiliImage2,
      alt: "Chili being fabulous",
    },
    {
      src: chiliImage3,
      alt: "Chili loves salmon oil time.",
    },
    {
      src: chiliImage4,
      alt: "Chili does a dangle blep while sleeping.",
    },
    {
      src: chiliImage5,
      alt: "Chili surprised",
    },
    {
      src: chiliImage6,
      alt: "Chili gets shaye belly rubs and is confirmed chonker",
    },
    {
      src: chiliImage7,
      alt: "Eepy Chili",
    },
    {
      src: chiliImage8,
      alt: "Chili pout in jail",
    },
    {
      src: chiliImage9,
      alt: "Chili smug",
    },
    {
      src: chiliImage10,
      alt: "Chili and Demeter in jail together",
    },
    {
      src: chiliImage11,
      alt: "Big boy Chili and tiny Mouse",
    },
  ],
  cowboy: [
    {
      src: cowboyImage1,
      alt: "Cowboy with chaps!",
    },
    {
      src: cowboyImage2,
      alt: "Cowboy in a blankie, after first arriving at Snail's House.",
    },
    {
      src: cowboyImage3,
      alt: "Cowboy noms at soup",
    },
    {
      src: cowboyImage4,
      alt: "Cowboy gets tastey oil in bed as a treat",
    },
    {
      src: cowboyImage5,
      alt: "Cowboy nomms some soup",
    },
    {
      src: cowboyImage6,
      alt: "Cowboy getting Cuddles",
    },
    {
      src: cowboyImage7,
      alt: "Cowboy Baby, drawing made by Shaye",
    },
    {
      src: cowboyImage8,
      alt: "Cowboy found his chill spot",
    },
    {
      src: cowboyImage9,
      alt: "Cowboy in blanky",
    },
    {
      src: cowboyImage10,
      alt: "Cowboy snuggling",
    },
    {
      src: cowboyImage11,
      alt: "Cowboy snuggling with the oldies pt.2",
    },
    {
      src: cowboyImage12,
      alt: "Cowboy snuggling with the oldies pt.3",
    },
    {
      src: cowboyImage13,
      alt: "Cowboy snuggling with the oldies pt.1",
    },
    {
      src: cowboyImage14,
      alt: "Cowboy in a (sock) sweater",
    },
    {
      src: cowboyImage15,
      alt: "Cowboy with Eddie's beans",
    },
    {
      src: cowboyImage16,
      alt: "Fig and Cowboy in wicker basket",
    },
    {
      src: cowboyImage17,
      alt: "Henry cuddling Cowboy",
    },
  ],
  demeter: [
    {
      src: demeterImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
    {
      src: demeterImage2,
      alt: "Chili and Demeter in jail together",
    },
    {
      src: demeterImage3,
      alt: "Demeter Body Pic",
    },
    {
      src: demeterImage4,
      alt: "Demeter Body Pic 2",
    },
    {
      src: demeterImage5,
      alt: "Deme sleep in jail",
    },
    {
      src: demeterImage6,
      alt: "Deme demands freedom",
    },
    {
      src: demeterImage7,
      alt: "Deme thinking about more climbing",
    },
    {
      src: demeterImage8,
      alt: "Demeter play with cat-toy",
    },
  ],
  eddie: [
    {
      src: eddieImage1,
      alt: "Banana and Eddie cuddle",
    },
    {
      src: eddieImage2,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
    },
    {
      src: eddieImage3,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: eddieImage4,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: eddieImage5,
      alt: "Eddie poops on Beans * (And Short Link )",
    },
    {
      src: eddieImage6,
      alt: "Cowboy with Eddie's beans",
    },
    {
      src: eddieImage7,
      alt: "Eddie says hello",
    },
    {
      src: eddieImage8,
      alt: "Eddie being cute",
    },
    {
      src: eddieImage9,
      alt: "Eddie in blanky",
    },
    {
      src: eddieImage10,
      alt: "Eddie on cat tree",
    },
    {
      src: eddieImage11,
      alt: "Comfy Ed",
    },
    {
      src: eddieImage12,
      alt: "curly Eddie",
    },
    {
      src: eddieImage13,
      alt: "eepy Eddie",
    },
    {
      src: eddieImage14,
      alt: "eepy Eddie",
    },
    {
      src: eddieImage15,
      alt: "Full Mugshot of Eddie",
    },
    {
      src: eddieImage16,
      alt: "Eddie noms soup",
    },
    {
      src: eddieImage17,
      alt: "Eddie: AAAAA",
    },
    {
      src: eddieImage18,
      alt: "Eddie (Left) and Fig (Right) Snuggle in Hunny Pot",
    },
    {
      src: eddieImage19,
      alt: "Eppy Henry and cuddle fren Eddie",
    },
    {
      src: eddieImage20,
      alt: "Eddie and Loki pretzel",
    },
    {
      src: eddieImage21,
      alt: "Eddie and Loki snuggle",
    },
    {
      src: eddieImage22,
      alt: "Eddie and Mishka pretzel",
    },
    {
      src: eddieImage23,
      alt: "Mouse cleaning Eddie's ears",
    },
    {
      src: eddieImage24,
      alt: "Eddie and Zero in barrels",
    },
  ],
  felix: [
    {
      src: felixImage1,
      alt: "Felix gets scritches on the way to the vet",
    },
    {
      src: felixImage2,
      alt: "Felix alert during transport to the overnight ICU",
    },
    {
      src: felixImage3,
      alt: "Felix alert during transport to the overnight ICU Pt. 2",
    },
    {
      src: felixImage4,
      alt: "Felix receiving IV fluids and medications in his ER cage",
    },
    {
      src: felixImage5,
      alt: "Felix comfy",
    },
    {
      src: felixImage6,
      alt: "Felix's fur is growing back",
    },
    {
      src: felixImage7,
      alt: "Felix rat tail",
    },
    {
      src: felixImage8,
      alt: "Felix nom soup",
    },
    {
      src: felixImage9,
      alt: "Felix face",
    },
    {
      src: felixImage10,
      alt: "Felix snooze",
    },
    {
      src: felixImage11,
      alt: "Felix Sniffa",
    },
    {
      src: felixImage12,
      alt: "Finn (bottom) and Felix (top) snuggle in a carrier on the way to the ER",
    },
    {
      src: felixImage13,
      alt: "Finn (top) and Felix (bottom) in a carrier",
    },
    {
      src: felixImage14,
      alt: "Finn (left) and Felix (right) first picture",
    },
  ],
  fig: [
    {
      src: figImage1,
      alt: "Fig and Cowboy in wicker basket",
    },
    {
      src: figImage2,
      alt: "Eddie (Left) and Fig (Right) Snuggle in Hunny Pot",
    },
    {
      src: figImage3,
      alt: "Fig being cute",
    },
    {
      src: figImage4,
      alt: "Fig sniff the mod",
    },
    {
      src: figImage5,
      alt: "Fig wants pet",
    },
    {
      src: figImage6,
      alt: "Fig slow eep",
    },
    {
      src: figImage7,
      alt: "Sleepy Fig",
    },
    {
      src: figImage8,
      alt: "Fig nose",
    },
    {
      src: figImage9,
      alt: "Fig sleep in the Wicker Basket",
    },
    {
      src: figImage10,
      alt: "Fig at the water bowl",
    },
    {
      src: figImage11,
      alt: "Fig sniffa",
    },
    {
      src: figImage12,
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: figImage13,
      alt: "Fig and Henry cuddle",
    },
    {
      src: figImage14,
      alt: "Fig kissa Henry",
    },
    {
      src: figImage15,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: figImage16,
      alt: "Fig and Moxie nomm some soup",
    },
    {
      src: figImage17,
      alt: "Fig in mango with Teep pt.2",
    },
    {
      src: figImage18,
      alt: "Fig in mango with Teep",
    },
  ],
  finn: [
    {
      src: finnImage1,
      alt: "Finn (bottom) and Felix (top) snuggle in a carrier on the way to the ER",
    },
    {
      src: finnImage2,
      alt: "Finn (top) and Felix (bottom) in a carrier",
    },
    {
      src: finnImage3,
      alt: "Finn (left) and Felix (right) first picture",
    },
    {
      src: finnImage4,
      alt: "Finn snoozes in his cage at the ER",
    },
  ],
  ghost: [
    {
      src: ghostImage1,
      alt: "Ghost being cute",
    },
    {
      src: ghostImage2,
      alt: "Ghost on bed looking cute",
    },
    {
      src: ghostImage3,
      alt: "Ghost on bed",
    },
    {
      src: ghostImage4,
      alt: "Ghost in a blanky",
    },
    {
      src: ghostImage5,
      alt: "Ghost on the beanbag",
    },
    {
      src: ghostImage6,
      alt: "Ghost says Hello!!",
    },
    {
      src: ghostImage7,
      alt: "Ghost wants an attention",
    },
    {
      src: ghostImage8,
      alt: "Ghost sleeping on bed",
    },
    {
      src: ghostImage9,
      alt: "Ghost with a ferret harness",
    },
    {
      src: ghostImage10,
      alt: "Ghost hold by Shaye",
    },
    {
      src: ghostImage11,
      alt: "Ghost picking men",
    },
    {
      src: ghostImage12,
      alt: "Ghost in baby jail",
    },
    {
      src: ghostImage13,
      alt: "Ghost and Shaye",
    },
    {
      src: ghostImage14,
      alt: "Ghost side",
    },
    {
      src: ghostImage15,
      alt: "Ghost in a tent",
    },
    {
      src: ghostImage16,
      alt: "Strawberry Ghost",
    },
  ],
  hazelnut: [
    {
      src: hazelnutImage1,
      alt: "Hazel with Cash",
    },
    {
      src: hazelnutImage2,
      alt: "Hazel with ball toy",
    },
    {
      src: hazelnutImage3,
      alt: "Hazel on cat-tree pt.2",
    },
    {
      src: hazelnutImage4,
      alt: "Hazel on cat-tree pt.1",
    },
    {
      src: hazelnutImage5,
      alt: "Hazel on frog bed",
    },
    {
      src: hazelnutImage6,
      alt: "Hazel think",
    },
    {
      src: hazelnutImage7,
      alt: "Hazel accepting lampchop offering",
    },
    {
      src: hazelnutImage8,
      alt: "Showing off Hazel back pattern",
    },
    {
      src: hazelnutImage9,
      alt: "Hazel biting lamby",
    },
    {
      src: hazelnutImage10,
      alt: "Hazel chilling on the big pillow",
    },
    {
      src: hazelnutImage11,
      alt: "Hazel battle lamby",
    },
    {
      src: hazelnutImage12,
      alt: "Hazel ready to play",
    },
    {
      src: hazelnutImage13,
      alt: "Full Mugshot Hazelnut",
    },
    {
      src: hazelnutImage14,
      alt: "Hazel stare",
    },
    {
      src: hazelnutImage15,
      alt: "Latte and Hazel sniffah doughnut",
    },
    {
      src: hazelnutImage16,
      alt: "Peanut left, Hazelnut right",
    },
    {
      src: hazelnutImage17,
      alt: "Peanut and Hazelnut nomming Shaye",
    },
    {
      src: hazelnutImage18,
      alt: "Hazel and Toby",
    },
  ],
  henry: [
    {
      src: henryImage1,
      alt: "Henry cuddling Cowboy",
    },
    {
      src: henryImage2,
      alt: "Eppy Henry and cuddle fren Eddie",
    },
    {
      src: henryImage3,
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: henryImage4,
      alt: "Fig and Henry cuddle",
    },
    {
      src: henryImage5,
      alt: "Fig kissa Henry",
    },
    {
      src: henryImage6,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: henryImage7,
      alt: "Ester Henry with hat and bow tie",
    },
    {
      src: henryImage8,
      alt: "Easter Henry sleeping with eggs",
    },
    {
      src: henryImage9,
      alt: "Lion King Henry",
    },
    {
      src: henryImage10,
      alt: "Easter Henry",
    },
    {
      src: henryImage11,
      alt: "Lion King Henry part two",
    },
    {
      src: henryImage12,
      alt: "Henry bearing axolotls for soup noms.",
    },
    {
      src: henryImage13,
      alt: "Henry comfy",
    },
    {
      src: henryImage14,
      alt: "Henry does a rawr",
    },
    {
      src: henryImage15,
      alt: "Henry Snuggles in Hunny Pot",
    },
    {
      src: henryImage16,
      alt: "Henry making big steppies",
    },
    {
      src: henryImage17,
      alt: "Henry photoshoot by shaye part one",
    },
    {
      src: henryImage18,
      alt: "Henry photoshoot by shaye part two",
    },
    {
      src: henryImage19,
      alt: "Henry photoshoot by shaye part three",
    },
    {
      src: henryImage20,
      alt: "Henry photoshoot by shaye part four",
    },
    {
      src: henryImage21,
      alt: "Henry photoshoot by shaye part five, he on the way to steal your heart.",
    },
    {
      src: henryImage22,
      alt: "Henry photoshoot by shaye part six",
    },
    {
      src: henryImage23,
      alt: "Stand by, Henry recharging.",
    },
    {
      src: henryImage24,
      alt: "Henry turned Pretzel",
    },
    {
      src: henryImage25,
      alt: "Henry playing in some rice, unsure if liked",
    },
    {
      src: henryImage26,
      alt: "eepy Henry on a rug",
    },
    {
      src: henryImage27,
      alt: "Henry goes back to sleep land",
    },
    {
      src: henryImage28,
      alt: "Henry eepy",
    },
    {
      src: henryImage29,
      alt: "Henry sleep distrubed by camera",
    },
    {
      src: henryImage30,
      alt: "Henry speaks to us again!",
    },
    {
      src: henryImage31,
      alt: "Henry toobs",
    },
    {
      src: henryImage32,
      alt: "Henry loves the frog",
    },
    {
      src: henryImage33,
      alt: "Henry and the frog",
    },
    {
      src: henryImage34,
      alt: "Henry chilling on the blanky",
    },
    {
      src: henryImage35,
      alt: "Henry contemplating soop",
    },
    {
      src: henryImage36,
      alt: "Henry the perfect cinnamon roll.",
    },
    {
      src: henryImage37,
      alt: "Henry with his froggy hat being very eepy",
    },
    {
      src: henryImage38,
      alt: "Henry with his froggy hat, so very eepy",
    },
    {
      src: henryImage39,
      alt: "Henry with his froggy hat",
    },
    {
      src: henryImage40,
      alt: "Henry the egg-o monster",
    },
    {
      src: henryImage41,
      alt: "Henry with tiny frog hat",
    },
    {
      src: henryImage42,
      alt: "Gangstah Henry",
    },
    {
      src: henryImage43,
      alt: "Henry halloween, very spook",
    },
    {
      src: henryImage44,
      alt: "Henry's satisfying poop face",
    },
    {
      src: henryImage45,
      alt: "Henry poop stance",
    },
    {
      src: henryImage46,
      alt: "Henry sleeping under blanky",
    },
    {
      src: henryImage47,
      alt: "Sleepy boi Henry!",
    },
    {
      src: henryImage48,
      alt: "Henry slipping in!",
    },
    {
      src: henryImage49,
      alt: "Henry solo sooping without support",
    },
    {
      src: henryImage50,
      alt: "Henry held infront of a bush",
    },
    {
      src: henryImage51,
      alt: "Henry touches grass, finds it comfy",
    },
    {
      src: henryImage52,
      alt: "Henry touches grass",
    },
    {
      src: henryImage53,
      alt: "Henry touches grass, confirmed not a vtuber",
    },
    {
      src: henryImage54,
      alt: "Henry in a tree, doing a explore",
    },
    {
      src: henryImage55,
      alt: "Henry very eepy",
    },
    {
      src: henryImage56,
      alt: "Very sleepy Henry",
    },
    {
      src: henryImage57,
      alt: "Henry's long whisker",
    },
    {
      src: henryImage58,
      alt: "Henry speaks to us",
    },
    {
      src: henryImage59,
      alt: "Henry fell into the soup",
    },
    {
      src: henryImage60,
      alt: "Drawing of Henry",
    },
    {
      src: henryImage61,
      alt: "Henry being the perfect cinnamon roll",
    },
    {
      src: henryImage62,
      alt: "Sleepy cinnamon roll Henry.",
    },
    {
      src: henryImage63,
      alt: "Henry very sleepy with toy",
    },
    {
      src: henryImage64,
      alt: "Henry eeps in the frogo bed",
    },
    {
      src: henryImage65,
      alt: "Henry snuggling together with Mocha",
    },
    {
      src: henryImage66,
      alt: "Henry cuddling Mocha",
    },
    {
      src: henryImage67,
      alt: "Moxie snuggle with Henry",
    },
    {
      src: henryImage68,
      alt: "Moxie is scarf for Henry",
    },
    {
      src: henryImage69,
      alt: "Teep grooming Henry",
    },
    {
      src: henryImage70,
      alt: "Grandpa and Henry",
    },
    {
      src: henryImage71,
      alt: "Grandpa hidden under Henry",
    },
  ],
  jack: [
    {
      src: jackImage1,
      alt: "Jack Body",
    },
    {
      src: jackImage2,
      alt: "Curly Jack",
    },
    {
      src: jackImage3,
      alt: "Jack Face",
    },
    {
      src: jackImage4,
      alt: "Jack in his blanky",
    },
    {
      src: jackImage5,
      alt: "Eepy Jack hold by Maddie",
    },
    {
      src: jackImage6,
      alt: "Jack think",
    },
    {
      src: jackImage7,
      alt: "Jack sip",
    },
    {
      src: jackImage8,
      alt: "Jack snuggle pt.2",
    },
    {
      src: jackImage9,
      alt: "Jack snuggle pt.1",
    },
    {
      src: jackImage10,
      alt: "Jack watching out of the window",
    },
    {
      src: jackImage11,
      alt: "Jack snuggle in the blanket",
    },
  ],
  jasmine: [
    {
      src: jasmineImage1,
      alt: "Jasmine in the paper bin",
    },
    {
      src: jasmineImage2,
      alt: "Jasmine Mugshot full",
    },
    {
      src: jasmineImage3,
      alt: "Jasmine requests freedom part one",
    },
    {
      src: jasmineImage4,
      alt: "Jasmine requests freedom part two",
    },
    {
      src: jasmineImage5,
      alt: "Jasmine cuddling with Luna and Peanut 2",
    },
    {
      src: jasmineImage6,
      alt: "Jasmine and eepy Moxie",
    },
  ],
  jinx: [
    {
      src: jinxImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
    {
      src: jinxImage2,
      alt: "Jinx doing a climb",
    },
  ],
  kahlua: [
    {
      src: kahluaImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
    {
      src: kahluaImage2,
      alt: "Kahlua snugle with blanky",
    },
    {
      src: kahluaImage3,
      alt: "Kahlua on huge pillow",
    },
    {
      src: kahluaImage4,
      alt: "Kahlua hide",
    },
    {
      src: kahluaImage5,
      alt: "Kahlua in the clouds",
    },
    {
      src: kahluaImage6,
      alt: "Kahlua ready for action",
    },
    {
      src: kahluaImage7,
      alt: "Kahlua: Wassup neighbour",
    },
    {
      src: kahluaImage8,
      alt: "Kahlua in the wicker basket",
    },
    {
      src: kahluaImage9,
      alt: "Full Mugshot of Kahlua",
    },
    {
      src: kahluaImage10,
      alt: "Kahlua stare",
    },
  ],
  kitty: [
    {
      src: kittyImage1,
      alt: "Kitty on arrival",
    },
    {
      src: kittyImage2,
      alt: "Kitty: And back to lambchop murder",
    },
    {
      src: kittyImage3,
      alt: "Kitty: So very mucher murder against lamb chop toys",
    },
    {
      src: kittyImage4,
      alt: "Kitty up to 670g from 525g",
    },
    {
      src: kittyImage5,
      alt: "Kitty enjoying some kibble",
    },
    {
      src: kittyImage6,
      alt: "Kitty on arrival, 525g",
    },
    {
      src: kittyImage7,
      alt: "Kitty: Stop, ponder time.",
    },
    {
      src: kittyImage8,
      alt: "Kitty messy from syringe feeding",
    },
    {
      src: kittyImage9,
      alt: "Kitty thinks about lamb chop murder",
    },
    {
      src: kittyImage10,
      alt: "Kitty walks around pt.1",
    },
    {
      src: kittyImage11,
      alt: "Kitty walks around pt.2",
    },
    {
      src: kittyImage12,
      alt: "Kitty drinking some water",
    },
    {
      src: kittyImage13,
      alt: "Kitty sniffah the hand",
    },
    {
      src: kittyImage14,
      alt: "So much murder of toys by Kitty",
    },
    {
      src: kittyImage15,
      alt: "Kitty commits lamb chop murder",
    },
    {
      src: kittyImage16,
      alt: "Kitty snuggling with Mocha and lambchops",
    },
    {
      src: kittyImage17,
      alt: "Kitty, Moxie and Rusty snuggle",
    },
  ],
  kylo: [
    {
      src: kyloImage1,
      alt: "Kylo snuggling with Shaye",
    },
    {
      src: kyloImage2,
      alt: "Kylo being comfy",
    },
    {
      src: kyloImage3,
      alt: "Kylo has big gort look energy",
    },
    {
      src: kyloImage4,
      alt: "Kylo and Loki sleeping together",
    },
  ],
  kyo: [
    {
      src: kyoImage1,
      alt: "Mugshot of Kyo",
    },
    {
      src: kyoImage2,
      alt: "Kyo next to tube",
    },
    {
      src: kyoImage3,
      alt: "Eepy Kyo",
    },
    {
      src: kyoImage4,
      alt: "Kyo in the toy basket",
    },
    {
      src: kyoImage5,
      alt: "Kyo asking for uppies",
    },
  ],
  latte: [
    {
      src: latteImage1,
      alt: "Bandit poops on Latte",
    },
    {
      src: latteImage2,
      alt: "Rusty, bruce and hawk pile",
    },
    {
      src: latteImage3,
      alt: "Latte and Hazel sniffah doughnut",
    },
    {
      src: latteImage4,
      alt: "Latte posing",
    },
    {
      src: latteImage5,
      alt: "Latte snuggle Catepillow",
    },
    {
      src: latteImage6,
      alt: "Latte: First pictures, already being cute pt.1",
    },
    {
      src: latteImage7,
      alt: "Latte: First pictures, already being cute pt.2",
    },
    {
      src: latteImage8,
      alt: "Latte modeling",
    },
    {
      src: latteImage9,
      alt: "Comfy Latte on cloud bed",
    },
    {
      src: latteImage10,
      alt: "Latte in the clouds",
    },
    {
      src: latteImage11,
      alt: "Latte enjoying a celestial breeze",
    },
    {
      src: latteImage12,
      alt: "Latte visit wet world with ducks",
    },
    {
      src: latteImage13,
      alt: "Latte (left) and Mocha (right)",
    },
    {
      src: latteImage14,
      alt: "Latte (left) and Mocha (right)",
    },
  ],
  loki: [
    {
      src: lokiImage1,
      alt: "Banana and Loki taking a bath",
    },
    {
      src: lokiImage2,
      alt: "Beans, Beef, Cheese, Loki, Snails visit wet-world",
    },
    {
      src: lokiImage3,
      alt: "Loki and Cheese at the Vet",
    },
    {
      src: lokiImage4,
      alt: "Eddie and Loki pretzel",
    },
    {
      src: lokiImage5,
      alt: "Eddie and Loki snuggle",
    },
    {
      src: lokiImage6,
      alt: "Kylo and Loki sleeping together",
    },
    {
      src: lokiImage7,
      alt: "Loki in the toob",
    },
    {
      src: lokiImage8,
      alt: "Drawing of Loki by Shaye",
    },
    {
      src: lokiImage9,
      alt: "Loki: Activate",
    },
    {
      src: lokiImage10,
      alt: "Loki nomming some soup",
    },
    {
      src: lokiImage11,
      alt: "Eepy Loki",
    },
    {
      src: lokiImage12,
      alt: "Smol Loki",
    },
    {
      src: lokiImage13,
      alt: "Full Mugshot of Loki",
    },
    {
      src: lokiImage14,
      alt: "Loki (left) and Snails (right) with ear tags",
    },
    {
      src: lokiImage15,
      alt: "Young Loki and Snails",
    },
    {
      src: lokiImage16,
      alt: "Loki and Snails rare bath time",
    },
    {
      src: lokiImage17,
      alt: "Loki and Snails cuddle",
    },
    {
      src: lokiImage18,
      alt: "Loki and Snails kissies",
    },
    {
      src: lokiImage19,
      alt: "Loki and Snails pout",
    },
    {
      src: lokiImage20,
      alt: "Loki and Snails rare bath time",
    },
    {
      src: lokiImage21,
      alt: "Loki and Teep in Ball-Pit",
    },
  ],
  louise: [
    {
      src: louiseImage1,
      alt: "Louise poses for the camera",
    },
  ],
  lucas: [
    {
      src: lucasImage1,
      alt: "Lucas with some toys",
    },
    {
      src: lucasImage2,
      alt: "Lucas is pretty",
    },
    {
      src: lucasImage3,
      alt: "Lucas has egg with Luna",
    },
  ],
  lucky: [
    {
      src: luckyImage1,
      alt: "Cheese and Lucky at the Gate",
    },
    {
      src: luckyImage2,
      alt: "Lucky is a big boi!",
    },
    {
      src: luckyImage3,
      alt: "Tiny Lucky",
    },
    {
      src: luckyImage4,
      alt: "Tiny Lucky",
    },
    {
      src: luckyImage5,
      alt: "Lucky: Hello neighbour",
    },
    {
      src: luckyImage6,
      alt: "Lucky sniffah!",
    },
    {
      src: luckyImage7,
      alt: "Lucky cuddle with Shaye",
    },
    {
      src: luckyImage8,
      alt: "Lucky curious",
    },
    {
      src: luckyImage9,
      alt: "Lucky Yoink",
    },
    {
      src: luckyImage10,
      alt: "Lucky, Pickle and Spud in Rice-Box",
    },
  ],
  luna: [
    {
      src: lunaImage1,
      alt: "Jasmine cuddling with Luna and Peanut 2",
    },
    {
      src: lunaImage2,
      alt: "Lucas has egg with Luna",
    },
    {
      src: lunaImage3,
      alt: "Luna being cute",
    },
    {
      src: lunaImage4,
      alt: "Luna hide",
    },
    {
      src: lunaImage5,
      alt: "Luna in blanky",
    },
    {
      src: lunaImage6,
      alt: "Cute Luna in blanky",
    },
    {
      src: lunaImage7,
      alt: "Full Mugshot of Luna",
    },
    {
      src: lunaImage8,
      alt: "Luna begging for stick with Rusty",
    },
    {
      src: lunaImage9,
      alt: "Luna together with Rusty wanting a stick",
    },
  ],
  maitai: [
    {
      src: maitaiImage1,
      alt: "Cheese & Mai Tai being divas together",
    },
    {
      src: maitaiImage2,
      alt: "Mai Tai cuddles",
    },
    {
      src: maitaiImage3,
      alt: "Mai Tai on TV",
    },
    {
      src: maitaiImage4,
      alt: "Mai Tai in the mango ready for snuggles",
    },
    {
      src: maitaiImage5,
      alt: "Mai Tai in the mango",
    },
    {
      src: maitaiImage6,
      alt: "Mai Tai on blanky",
    },
    {
      src: maitaiImage7,
      alt: "Mai Tai on big pillow",
    },
    {
      src: maitaiImage8,
      alt: "Mai Tai ready for action",
    },
    {
      src: maitaiImage9,
      alt: "Mai Tai bald headed",
    },
  ],
  maisy: [
    {
      src: maisyImage1,
      alt: "Flat head Maisy",
    },
    {
      src: maisyImage2,
      alt: "Maisy hold by Maddie",
    },
    {
      src: maisyImage3,
      alt: "Maisy during quarantine",
    },
    {
      src: maisyImage4,
      alt: "Maisy doing an evil",
    },
  ],
  max: [
    {
      src: maxImage1,
      alt: "Max arrived at the rescue",
    },
    {
      src: maxImage2,
      alt: "Max nice and comfy",
    },
    {
      src: maxImage3,
      alt: "Max very interested",
    },
    {
      src: maxImage4,
      alt: "Max in a box",
    },
    {
      src: maxImage5,
      alt: "Max sniffah box",
    },
    {
      src: maxImage6,
      alt: "Max weighing up to 935g now",
    },
    {
      src: maxImage7,
      alt: "Young Max",
    },
    {
      src: maxImage8,
      alt: "Max lion king moment",
    },
    {
      src: maxImage9,
      alt: "Young Max sleep",
    },
    {
      src: maxImage10,
      alt: "Young Max cuddles",
    },
    {
      src: maxImage11,
      alt: "Zero and Max cuddle",
    },
    {
      src: maxImage12,
      alt: "Zero and Max cuddle buddies",
    },
    {
      src: maxImage13,
      alt: "Zero and Max hug",
    },
  ],
  milo: [
    {
      src: miloImage1,
      alt: "Milo stare",
    },
    {
      src: miloImage2,
      alt: "Milo comfy",
    },
    {
      src: miloImage3,
      alt: "Milo during qt",
    },
    {
      src: miloImage4,
      alt: "Milo: Whaaarrggg mine!! pt.2",
    },
    {
      src: miloImage5,
      alt: "Milo: Whaaarrggg mine!! pt.1",
    },
  ],
  mimosa: [
    {
      src: mimosaImage1,
      alt: "Mimosa ready for a treat",
    },
    {
      src: mimosaImage2,
      alt: "Mimosa sniffah blanket",
    },
    {
      src: mimosaImage3,
      alt: "Mimosa would like a treat",
    },
    {
      src: mimosaImage4,
      alt: "Comfy Mimosa",
    },
    {
      src: mimosaImage5,
      alt: "Cute Mimosa",
    },
  ],
  mishka: [
    {
      src: mishkaImage1,
      alt: "Eddie and Mishka pretzel",
    },
    {
      src: mishkaImage2,
      alt: "Mishka on wicker basket",
    },
    {
      src: mishkaImage3,
      alt: "Mishka in qt cage",
    },
    {
      src: mishkaImage4,
      alt: "Mishka nom soup",
    },
    {
      src: mishkaImage5,
      alt: "Mishka blep",
    },
    {
      src: mishkaImage6,
      alt: "Mishka and Mouse",
    },
    {
      src: mishkaImage7,
      alt: "Mishka and Toby being cute",
    },
    {
      src: mishkaImage8,
      alt: "Mishka and Toby want attention",
    },
    {
      src: mishkaImage9,
      alt: "Mishka and Toby in the clouds",
    },
  ],
  mistoffelees: [
    {
      src: mistoffeleesImage1,
      alt: "Misto cuddles",
    },
    {
      src: mistoffeleesImage2,
      alt: "Misto eepy",
    },
    {
      src: mistoffeleesImage3,
      alt: "Misto is a toy",
    },
    {
      src: mistoffeleesImage4,
      alt: "M for Mistoffelees",
    },
    {
      src: mistoffeleesImage5,
      alt: "Misto nomms soup",
    },
    {
      src: mistoffeleesImage6,
      alt: "Misto posing in the rice bin",
    },
    {
      src: mistoffeleesImage7,
      alt: "Misto stare down in the rice bin",
    },
    {
      src: mistoffeleesImage8,
      alt: "Misto glamor shot in the rice bin",
    },
    {
      src: mistoffeleesImage9,
      alt: "Misto the unsuccessful oil thief",
    },
    {
      src: mistoffeleesImage10,
      alt: "Misto doing a sleep over the ramp",
    },
    {
      src: mistoffeleesImage11,
      alt: "Misto loaf mode",
    },
    {
      src: mistoffeleesImage12,
      alt: "Misto play with tunnel ball",
    },
    {
      src: mistoffeleesImage13,
      alt: "Misto would like an attention",
    },
    {
      src: mistoffeleesImage14,
      alt: "Mistoffelees, Pickle, and Peanut cuddle with Shaye",
    },
    {
      src: mistoffeleesImage15,
      alt: "Whiskey chilling with Mistoffelees",
    },
    {
      src: mistoffeleesImage16,
      alt: "Mistoffelees and Whiskey play with toy",
    },
  ],
  mocha: [
    {
      src: mochaImage1,
      alt: "Henry snuggling together with Mocha",
    },
    {
      src: mochaImage2,
      alt: "Henry cuddling Mocha",
    },
    {
      src: mochaImage3,
      alt: "Kitty snuggling with Mocha and lambchops",
    },
    {
      src: mochaImage4,
      alt: "Latte (left) and Mocha (right)",
    },
    {
      src: mochaImage5,
      alt: "Latte (left) and Mocha (right)",
    },
    {
      src: mochaImage6,
      alt: "Mocha beome flat",
    },
    {
      src: mochaImage7,
      alt: "Mocha activated.",
    },
    {
      src: mochaImage8,
      alt: "Mocha before and after his dim treatments.",
    },
    {
      src: mochaImage9,
      alt: "Mocha wants to go back to bed",
    },
    {
      src: mochaImage10,
      alt: "Curious Mocha",
    },
    {
      src: mochaImage11,
      alt: "Mocha being a fabulous camera boy",
    },
    {
      src: mochaImage12,
      alt: "Mocha says time for sleep",
    },
    {
      src: mochaImage13,
      alt: "Sneaky Mocha",
    },
    {
      src: mochaImage14,
      alt: "Mocha snooze",
    },
    {
      src: mochaImage15,
      alt: "Wet Mocha is mad",
    },
    {
      src: mochaImage16,
      alt: "Mocha when he first arrived",
    },
    {
      src: mochaImage17,
      alt: "Mocha is fluffy",
    },
    {
      src: mochaImage18,
      alt: "Mocha is cute!",
    },
    {
      src: mochaImage19,
      alt: "Mocha feeling cute",
    },
    {
      src: mochaImage20,
      alt: "Mocha: First day stable temperature",
    },
    {
      src: mochaImage21,
      alt: "Mocha big yawn!",
    },
    {
      src: mochaImage22,
      alt: "Mocha: Box is good",
    },
    {
      src: mochaImage23,
      alt: "Mocha is innocent",
    },
    {
      src: mochaImage24,
      alt: "Mocha is a sleepy loaf!",
    },
    {
      src: mochaImage25,
      alt: "Mocha waiting for chemo",
    },
    {
      src: mochaImage26,
      alt: "Mocha Mango!",
    },
    {
      src: mochaImage27,
      alt: "Mocha smiling for the camera",
    },
    {
      src: mochaImage28,
      alt: "Mocha haz sleepz",
    },
    {
      src: mochaImage29,
      alt: "Mocha spilling from sleep spot",
    },
    {
      src: mochaImage30,
      alt: "Young Mocha",
    },
    {
      src: mochaImage31,
      alt: "Mouse and Mocha snooze",
    },
    {
      src: mochaImage32,
      alt: "Rusty and Mocha in blanky",
    },
  ],
  moose: [
    {
      src: mooseImage1,
      alt: "Moose says henlo",
    },
    {
      src: mooseImage2,
      alt: "Moose curious",
    },
    {
      src: mooseImage3,
      alt: "Moose in Tube",
    },
    {
      src: mooseImage4,
      alt: "Moose and Pepper eepy",
    },
    {
      src: mooseImage5,
      alt: "Moose and Pepper eepy",
    },
    {
      src: mooseImage6,
      alt: "Pepper in a basket with Moose in the back",
    },
    {
      src: mooseImage7,
      alt: "Pepper cuddles with Moose",
    },
    {
      src: mooseImage8,
      alt: "Moose nomming with Salt and Pepper",
    },
  ],
  mouse: [
    {
      src: mouseImage1,
      alt: "Beans getting kissies by Mouse",
    },
    {
      src: mouseImage2,
      alt: "Cheese and Mouse",
    },
    {
      src: mouseImage3,
      alt: "Big boy Chili and tiny Mouse",
    },
    {
      src: mouseImage4,
      alt: "Mouse cleaning Eddie's ears",
    },
    {
      src: mouseImage5,
      alt: "Mishka and Mouse",
    },
    {
      src: mouseImage6,
      alt: "Mouse and Mocha snooze",
    },
    {
      src: mouseImage7,
      alt: "More eepy Mouse",
    },
    {
      src: mouseImage8,
      alt: "Eepy Mouse",
    },
    {
      src: mouseImage9,
      alt: "Drawing of Mouse by Shaye",
    },
    {
      src: mouseImage10,
      alt: "Graceful Mouse",
    },
    {
      src: mouseImage11,
      alt: "long Mouse",
    },
    {
      src: mouseImage12,
      alt: "Mouse observing from the mango",
    },
    {
      src: mouseImage13,
      alt: "Mouse in the Mango",
    },
    {
      src: mouseImage14,
      alt: "Mouse: I have wares",
    },
    {
      src: mouseImage15,
      alt: "Mouse being photogenic.",
    },
    {
      src: mouseImage16,
      alt: "Mouse poses for the cam`",
    },
    {
      src: mouseImage17,
      alt: "Mouse stare",
    },
    {
      src: mouseImage18,
      alt: "Murderous Mouse drawing by Shaye",
    },
    {
      src: mouseImage19,
      alt: "Mouse being cute",
    },
    {
      src: mouseImage20,
      alt: "Mouse hiding under cupboard",
    },
    {
      src: mouseImage21,
      alt: "Eepy Mouse in paper box",
    },
    {
      src: mouseImage22,
      alt: "Mouse in paper box",
    },
    {
      src: mouseImage23,
      alt: "Space Mouse",
    },
    {
      src: mouseImage24,
      alt: "Mouse sniffah",
    },
    {
      src: mouseImage25,
      alt: "Mouse says hello",
    },
    {
      src: mouseImage26,
      alt: "Mouse in rice",
    },
    {
      src: mouseImage27,
      alt: "Mouse wants an attention",
    },
    {
      src: mouseImage28,
      alt: "Mouse has spoken to us",
    },
    {
      src: mouseImage29,
      alt: "Space Mouse drawing by Shaye",
    },
    {
      src: mouseImage30,
      alt: "Mouse faceoff with Rusty",
    },
    {
      src: mouseImage31,
      alt: "Zero and Mouse",
    },
  ],
  moxie: [
    {
      src: moxieImage1,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
    },
    {
      src: moxieImage2,
      alt: "Bandit and Moxie nom some kibble",
    },
    {
      src: moxieImage3,
      alt: "Fig and Moxie nomm some soup",
    },
    {
      src: moxieImage4,
      alt: "Moxie snuggle with Henry",
    },
    {
      src: moxieImage5,
      alt: "Moxie is scarf for Henry",
    },
    {
      src: moxieImage6,
      alt: "Jasmine and eepy Moxie",
    },
    {
      src: moxieImage7,
      alt: "Kitty, Moxie and Rusty snuggle",
    },
    {
      src: moxieImage8,
      alt: "Moxie cataracts",
    },
    {
      src: moxieImage9,
      alt: "Moxie eepy",
    },
    {
      src: moxieImage10,
      alt: "Moxie nom soup",
    },
    {
      src: moxieImage11,
      alt: "Moxie has no time for babying",
    },
    {
      src: moxieImage12,
      alt: "Moxie comfy",
    },
    {
      src: moxieImage13,
      alt: "Moxie eepy",
    },
  ],
  nacho: [
    {
      src: nachoImage1,
      alt: "Nacho in the ball-pit",
    },
    {
      src: nachoImage2,
      alt: "Cuddle Nacho!",
    },
    {
      src: nachoImage3,
      alt: "Nacho in blanky bliss",
    },
    {
      src: nachoImage4,
      alt: "Nacho in blanky",
    },
    {
      src: nachoImage5,
      alt: "Mechanic Nacho",
    },
    {
      src: nachoImage6,
      alt: "Nacho ready for play",
    },
    {
      src: nachoImage7,
      alt: "Nacho wrapped up in blanky",
    },
    {
      src: nachoImage8,
      alt: "Big Boy Nacho",
    },
    {
      src: nachoImage9,
      alt: "Nacho time",
    },
    {
      src: nachoImage10,
      alt: "Sleepy Nacho",
    },
    {
      src: nachoImage11,
      alt: "Nacho, Onion and Vincent Playtime",
    },
    {
      src: nachoImage12,
      alt: "Baby Nacho and Salsa",
    },
    {
      src: nachoImage13,
      alt: "Nacho and Vincent Playtime",
    },
    {
      src: nachoImage14,
      alt: "Nacho and Vincent play",
    },
  ],
  odin: [
    {
      src: odinImage1,
      alt: "Odin calculating play options",
    },
    {
      src: odinImage2,
      alt: "Odin ready to play",
    },
    {
      src: odinImage3,
      alt: "Odin on blanky",
    },
    {
      src: odinImage4,
      alt: "Odin in the mango",
    },
    {
      src: odinImage5,
      alt: "Full Mugshot of Odin",
    },
  ],
  onion: [
    {
      src: onionImage1,
      alt: "Beans and Onion drawing by Shaye",
    },
    {
      src: onionImage2,
      alt: "Beans laying on Onion",
    },
    {
      src: onionImage3,
      alt: "Beans and Onion snake mode drawing by Spice Link",
    },
    {
      src: onionImage4,
      alt: "Beans cuddle with Onion and Grandpa",
    },
    {
      src: onionImage5,
      alt: "Nacho, Onion and Vincent Playtime",
    },
    {
      src: onionImage6,
      alt: "Onion on flower cat-tree",
    },
    {
      src: onionImage7,
      alt: "Onion the mage",
    },
    {
      src: onionImage8,
      alt: "Onion tries to climb",
    },
    {
      src: onionImage9,
      alt: "Onion caugt climbing",
    },
    {
      src: onionImage10,
      alt: "Onion thinking about more climbing",
    },
    {
      src: onionImage11,
      alt: "Shaye holds Onion",
    },
    {
      src: onionImage12,
      alt: "Fist Picture of Onion",
    },
    {
      src: onionImage13,
      alt: "What do you have Onion",
    },
  ],
  peanut: [
    {
      src: peanutImage1,
      alt: "Peanut demands the sun spot from Beans",
    },
    {
      src: peanutImage2,
      alt: "Peanut has been spotted by Beans",
    },
    {
      src: peanutImage3,
      alt: "Peanut, Beans: Whaaaaagghh!",
    },
    {
      src: peanutImage4,
      alt: "Beans and Peanut share a penthouse",
    },
    {
      src: peanutImage5,
      alt: "Peanut left, Hazelnut right",
    },
    {
      src: peanutImage6,
      alt: "Peanut and Hazelnut nomming Shaye",
    },
    {
      src: peanutImage7,
      alt: "Mistoffelees, Pickle, and Peanut cuddle with Shaye",
    },
    {
      src: peanutImage8,
      alt: "Peanut attacks the Cattepillar pt.1",
    },
    {
      src: peanutImage9,
      alt: "Peanut attacks the Cattepillar pt.2",
    },
    {
      src: peanutImage10,
      alt: "Peanut the egg monster has no regrets",
    },
    {
      src: peanutImage11,
      alt: "Peanut the egg monster",
    },
    {
      src: peanutImage12,
      alt: "Peanut Looks Around",
    },
    {
      src: peanutImage13,
      alt: "Peanut hold",
    },
    {
      src: peanutImage14,
      alt: "Peanut Posing",
    },
    {
      src: peanutImage15,
      alt: "Peanut rage.",
    },
    {
      src: peanutImage16,
      alt: "Peanut stick leg out real far",
    },
    {
      src: peanutImage17,
      alt: "Peanut hiding in blanky",
    },
    {
      src: peanutImage18,
      alt: "Peanut does a wardance",
    },
    {
      src: peanutImage19,
      alt: "Peanut head pattern",
    },
    {
      src: peanutImage20,
      alt: "Peanut doing a dodge",
    },
    {
      src: peanutImage21,
      alt: "Peanut is the drama",
    },
    {
      src: peanutImage22,
      alt: "Peanut on big pillow",
    },
    {
      src: peanutImage23,
      alt: "Peanut ready for action",
    },
    {
      src: peanutImage24,
      alt: "Peanut ready for noms",
    },
    {
      src: peanutImage25,
      alt: "Peanut sniffah the clouds",
    },
    {
      src: peanutImage26,
      alt: "Peanut surprise picture!",
    },
    {
      src: peanutImage27,
      alt: "Peanut: To Eat food is to become food!",
    },
    {
      src: peanutImage28,
      alt: "VamPeanut, drawing by Shaye",
    },
    {
      src: peanutImage29,
      alt: "Peanut very interested",
    },
    {
      src: peanutImage30,
      alt: "Peanut with Toby",
    },
  ],
  peanut2: [
    {
      src: peanut2Image1,
      alt: "Bagel sleeps on Peanut 2",
    },
    {
      src: peanut2Image2,
      alt: "Peanut 2, Bagel, and Pepper 2 at the soop",
    },
    {
      src: peanut2Image3,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
    },
    {
      src: peanut2Image4,
      alt: "Jasmine cuddling with Luna and Peanut 2",
    },
    {
      src: peanut2Image5,
      alt: "Peanut 2 being cute.",
    },
    {
      src: peanut2Image6,
      alt: "Peanut 2 gets more drinks",
    },
    {
      src: peanut2Image7,
      alt: "Peanut 2 Drinks",
    },
    {
      src: peanut2Image8,
      alt: "Peanut 2's Headshot",
    },
    {
      src: peanut2Image9,
      alt: "Peanut 2 Face Shot",
    },
    {
      src: peanut2Image10,
      alt: "Peanut 2 Side Shot",
    },
    {
      src: peanut2Image11,
      alt: "Peanut 2 Mugshot",
    },
    {
      src: peanut2Image12,
      alt: "Peanut 2 Face",
    },
  ],
  peepo: [
    {
      src: peepoImage1,
      alt: "Badger and Peepo zonked after playtime",
    },
    {
      src: peepoImage2,
      alt: "Peepo wants attention",
    },
    {
      src: peepoImage3,
      alt: "Peepo hanging out of tunnel",
    },
    {
      src: peepoImage4,
      alt: "Peepo confused",
    },
    {
      src: peepoImage5,
      alt: "Peepo hidden in blanky",
    },
    {
      src: peepoImage6,
      alt: "Peepo being cute",
    },
    {
      src: peepoImage7,
      alt: "Peepo in blanky",
    },
    {
      src: peepoImage8,
      alt: "Peepo laying on tunnel",
    },
    {
      src: peepoImage9,
      alt: "Peepo playing with tunnel ball",
    },
    {
      src: peepoImage10,
      alt: "Peepo strawberry edition",
    },
    {
      src: peepoImage11,
      alt: "Peepo the dragon slayer",
    },
    {
      src: peepoImage12,
      alt: "eepy Peepo",
    },
    {
      src: peepoImage13,
      alt: "Peepo on the leaf",
    },
    {
      src: peepoImage14,
      alt: "Peepo modeling",
    },
  ],
  pepper: [
    {
      src: pepperImage1,
      alt: "Moose and Pepper eepy",
    },
    {
      src: pepperImage2,
      alt: "Moose and Pepper eepy",
    },
    {
      src: pepperImage3,
      alt: "Pepper in a basket with Moose in the back",
    },
    {
      src: pepperImage4,
      alt: "Pepper cuddles with Moose",
    },
    {
      src: pepperImage5,
      alt: "Moose nomming with Salt and Pepper",
    },
    {
      src: pepperImage6,
      alt: "Pepper being cute",
    },
    {
      src: pepperImage7,
      alt: "Pepper says hello",
    },
    {
      src: pepperImage8,
      alt: "Pepper uppies",
    },
    {
      src: pepperImage9,
      alt: "Pepper do a roll",
    },
    {
      src: pepperImage10,
      alt: "Pepper and the Slime",
    },
    {
      src: pepperImage11,
      alt: "Pepper curious",
    },
  ],
  pepper2: [
    {
      src: pepper2Image1,
      alt: "Peanut 2, Bagel, and Pepper 2 at the soop",
    },
    {
      src: pepper2Image2,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
    },
    {
      src: pepper2Image3,
      alt: "old man Pepper 2 says hi",
    },
    {
      src: pepper2Image4,
      alt: "Pepperoni uppies",
    },
  ],
  pickle: [
    {
      src: pickleImage1,
      alt: "Lucky, Pickle and Spud in Rice-Box",
    },
    {
      src: pickleImage2,
      alt: "Mistoffelees, Pickle, and Peanut cuddle with Shaye",
    },
    {
      src: pickleImage3,
      alt: "Drawing of Pickle by Shaye",
    },
    {
      src: pickleImage4,
      alt: "Pickle mask change pt.4",
    },
    {
      src: pickleImage5,
      alt: "Pickle loafs on the ramp",
    },
    {
      src: pickleImage6,
      alt: "Pickle hold Shaye's hand",
    },
    {
      src: pickleImage7,
      alt: "Pickle in the castle",
    },
    {
      src: pickleImage8,
      alt: "Pickle pouting",
    },
    {
      src: pickleImage9,
      alt: "Sleepy Pickle",
    },
    {
      src: pickleImage10,
      alt: "Pickle sniffah",
    },
    {
      src: pickleImage11,
      alt: "Pickle would like Maddie's attention",
    },
    {
      src: pickleImage12,
      alt: "Pickle at the Vet for checkup",
    },
    {
      src: pickleImage13,
      alt: "Pickle nibble on hand",
    },
    {
      src: pickleImage14,
      alt: "Bongos Emote (by Shaye) is based on Pickle",
    },
    {
      src: pickleImage15,
      alt: "Pickle gets cuddles by Shaye",
    },
    {
      src: pickleImage16,
      alt: "Pickle wants an attention",
    },
    {
      src: pickleImage17,
      alt: "Pickle stare",
    },
    {
      src: pickleImage18,
      alt: "Pickle says hi",
    },
    {
      src: pickleImage19,
      alt: "Pickle being cute",
    },
    {
      src: pickleImage20,
      alt: "Pickle get cuddles",
    },
    {
      src: pickleImage21,
      alt: "Grass Emote (by Shaye) is based on Pickle",
    },
    {
      src: pickleImage22,
      alt: "Hangover Pickle",
    },
    {
      src: pickleImage23,
      alt: "Pickle hold by Shaye",
    },
    {
      src: pickleImage24,
      alt: "First picture of Pickle",
    },
    {
      src: pickleImage25,
      alt: "Pickle in the spider",
    },
    {
      src: pickleImage26,
      alt: "Pickle destroy",
    },
    {
      src: pickleImage27,
      alt: "Pickle licks his belly",
    },
    {
      src: pickleImage28,
      alt: "Pickle mask change pt.1",
    },
    {
      src: pickleImage29,
      alt: "Pickle mask change pt.2",
    },
    {
      src: pickleImage30,
      alt: "Pickle mask change pt.3",
    },
    {
      src: pickleImage31,
      alt: "Full Mugshot of Pickle",
    },
    {
      src: pickleImage32,
      alt: "Pickle nom soup",
    },
    {
      src: pickleImage33,
      alt: "Pickle in paper box",
    },
    {
      src: pickleImage34,
      alt: "Pickle hidden in rice",
    },
    {
      src: pickleImage35,
      alt: "Sneaky Pickle",
    },
    {
      src: pickleImage36,
      alt: "Pickle: Floor soup best soup",
    },
    {
      src: pickleImage37,
      alt: "Sleepy Pickle sploot out of Hotel.",
    },
    {
      src: pickleImage38,
      alt: "Pickle uppies",
    },
    {
      src: pickleImage39,
      alt: "Upside down Pickle",
    },
    {
      src: pickleImage40,
      alt: "Sleepy Pickle in Hotel",
    },
    {
      src: pickleImage41,
      alt: "Pickle together with Whiskey wanting to play",
    },
  ],
  roxy: [
    {
      src: roxyImage1,
      alt: "Roxy back",
    },
    {
      src: roxyImage2,
      alt: "Roxy very interested",
    },
    {
      src: roxyImage3,
      alt: "Roxy nail trim time",
    },
    {
      src: roxyImage4,
      alt: "Roxy in the pineapple",
    },
  ],
  rusty: [
    {
      src: rustyImage1,
      alt: "Banana and Rusty eating stick together",
    },
    {
      src: rustyImage2,
      alt: "Rusty, bruce and hawk pile",
    },
    {
      src: rustyImage3,
      alt: "Kitty, Moxie and Rusty snuggle",
    },
    {
      src: rustyImage4,
      alt: "Luna begging for stick with Rusty",
    },
    {
      src: rustyImage5,
      alt: "Luna together with Rusty wanting a stick",
    },
    {
      src: rustyImage6,
      alt: "Rusty and Mocha in blanky",
    },
    {
      src: rustyImage7,
      alt: "Mouse faceoff with Rusty",
    },
    {
      src: rustyImage8,
      alt: "Rusty angry for not having stick",
    },
    {
      src: rustyImage9,
      alt: "Rusty hoping for a stick",
    },
    {
      src: rustyImage10,
      alt: "Rusty pout for stick",
    },
    {
      src: rustyImage11,
      alt: "Rusty taking u-turn",
    },
    {
      src: rustyImage12,
      alt: "Rusty trying stealth",
    },
    {
      src: rustyImage13,
      alt: "Rusty wants a stick",
    },
    {
      src: rustyImage14,
      alt: "Rusty on the catepillow",
    },
    {
      src: rustyImage15,
      alt: "Full Mugshot of Rusty",
    },
    {
      src: rustyImage16,
      alt: "Rusty sploot",
    },
  ],
  sai: [
    {
      src: saiImage1,
      alt: "Full Mugshot of Sai",
    },
    {
      src: saiImage2,
      alt: "Sai nomms some soup",
    },
  ],
  salsa: [
    {
      src: salsaImage1,
      alt: "Baby Nacho and Salsa",
    },
    {
      src: salsaImage2,
      alt: "Salsa hiding in box",
    },
    {
      src: salsaImage3,
      alt: "Salsa in blanky",
    },
    {
      src: salsaImage4,
      alt: "Salsa on top of tunnel",
    },
    {
      src: salsaImage5,
      alt: "Salsa in stealth ready for action",
    },
    {
      src: salsaImage6,
      alt: "Salsa stashing carrot",
    },
    {
      src: salsaImage7,
      alt: "Salsa in tunnel",
    },
    {
      src: salsaImage8,
      alt: "Salsa on couch",
    },
  ],
  salt: [
    {
      src: saltImage1,
      alt: "Moose nomming with Salt and Pepper",
    },
    {
      src: saltImage2,
      alt: "Salt in blanky",
    },
    {
      src: saltImage3,
      alt: "Salt hold",
    },
    {
      src: saltImage4,
      alt: "Salt play with toy pt.2",
    },
    {
      src: saltImage5,
      alt: "Salt play with toy pt.1",
    },
    {
      src: saltImage6,
      alt: "Salt's new home, the litter bin",
    },
  ],
  salt2: [
    {
      src: salt2Image1,
      alt: "Salt 2 looking cute",
    },
    {
      src: salt2Image2,
      alt: "Salt 2 looking very interested",
    },
    {
      src: salt2Image3,
      alt: "Salt 2 locked in",
    },
  ],
  scotch: [
    {
      src: scotchImage1,
      alt: "Scotch bite",
    },
    {
      src: scotchImage2,
      alt: "Scotch boop",
    },
    {
      src: scotchImage3,
      alt: "Scotch wants an attention",
    },
    {
      src: scotchImage4,
      alt: "Scotch does a leap",
    },
    {
      src: scotchImage5,
      alt: "Full Mugshot of Scotch",
    },
    {
      src: scotchImage6,
      alt: "Scotch sniff",
    },
    {
      src: scotchImage7,
      alt: "Scotch chilling on the pillow",
    },
    {
      src: scotchImage8,
      alt: "Scotch doing a sneak",
    },
    {
      src: scotchImage9,
      alt: "Scotch in the plastic tub",
    },
    {
      src: scotchImage10,
      alt: "Scotch on big pillow",
    },
    {
      src: scotchImage11,
      alt: "Scotch modeling",
    },
    {
      src: scotchImage12,
      alt: "Scotch wanting to play",
    },
  ],
  snails: [
    {
      src: snailsImage1,
      alt: "Beans, Beef, Cheese, Loki, Snails visit wet-world",
    },
    {
      src: snailsImage2,
      alt: "Young Snails and Cheese",
    },
    {
      src: snailsImage3,
      alt: "Loki (left) and Snails (right) with ear tags",
    },
    {
      src: snailsImage4,
      alt: "Young Loki and Snails",
    },
    {
      src: snailsImage5,
      alt: "Loki and Snails rare bath time",
    },
    {
      src: snailsImage6,
      alt: "Loki and Snails cuddle",
    },
    {
      src: snailsImage7,
      alt: "Loki and Snails kissies",
    },
    {
      src: snailsImage8,
      alt: "Loki and Snails pout",
    },
    {
      src: snailsImage9,
      alt: "Loki and Snails rare bath time",
    },
    {
      src: snailsImage10,
      alt: "Dumpy Emote is based on Snails",
    },
    {
      src: snailsImage11,
      alt: "Bagworm Snails",
    },
    {
      src: snailsImage12,
      alt: "Snails comfy",
    },
    {
      src: snailsImage13,
      alt: "Painting of Snails",
    },
    {
      src: snailsImage14,
      alt: "Snails like a squeaky toy",
    },
    {
      src: snailsImage15,
      alt: "Snails, drawing by Shaye",
    },
    {
      src: snailsImage16,
      alt: "Snails says hello",
    },
    {
      src: snailsImage17,
      alt: "curly Snails",
    },
    {
      src: snailsImage18,
      alt: "Snails comfy",
    },
    {
      src: snailsImage19,
      alt: "Snails in blanky",
    },
    {
      src: snailsImage20,
      alt: "Snails comfy sleep",
    },
    {
      src: snailsImage21,
      alt: "Snails big mlem",
    },
  ],
  snowball: [
    {
      src: snowballImage1,
      alt: "Comfy Snowball getting cuddles",
    },
  ],
  spud: [
    {
      src: spudImage1,
      alt: "Lucky, Pickle and Spud in Rice-Box",
    },
    {
      src: spudImage2,
      alt: "Spud blep",
    },
    {
      src: spudImage3,
      alt: "Spud with carrot toy",
    },
    {
      src: spudImage4,
      alt: "Comfy Spud",
    },
    {
      src: spudImage5,
      alt: "Spud and the doughnut",
    },
    {
      src: spudImage6,
      alt: "Full Mugshot of Spud",
    },
  ],
  teep: [
    {
      src: teepImage1,
      alt: "Fig in mango with Teep pt.2",
    },
    {
      src: teepImage2,
      alt: "Fig in mango with Teep",
    },
    {
      src: teepImage3,
      alt: "Teep grooming Henry",
    },
    {
      src: teepImage4,
      alt: "Loki and Teep in Ball-Pit",
    },
    {
      src: teepImage5,
      alt: "Teep being cute",
    },
    {
      src: teepImage6,
      alt: "Eepy Teep",
    },
    {
      src: teepImage7,
      alt: "Teep in square bed",
    },
    {
      src: teepImage8,
      alt: "Teep worm",
    },
  ],
  thelma: [
    {
      src: thelmaImage1,
      alt: "Thelma: Unhand me hooman!",
    },
    {
      src: thelmaImage2,
      alt: "Thelma is confused, why lift, must play",
    },
  ],
  toby: [
    {
      src: tobyImage1,
      alt: "Hazel and Toby",
    },
    {
      src: tobyImage2,
      alt: "Mishka and Toby being cute",
    },
    {
      src: tobyImage3,
      alt: "Mishka and Toby want attention",
    },
    {
      src: tobyImage4,
      alt: "Mishka and Toby in the clouds",
    },
    {
      src: tobyImage5,
      alt: "Peanut with Toby",
    },
    {
      src: tobyImage6,
      alt: "Toby says hi",
    },
    {
      src: tobyImage7,
      alt: "Toby wants an attention",
    },
    {
      src: tobyImage8,
      alt: "Toby climb",
    },
    {
      src: tobyImage9,
      alt: "Toby ready for action",
    },
    {
      src: tobyImage10,
      alt: "Toby looking concerned",
    },
    {
      src: tobyImage11,
      alt: "Toby on blanky",
    },
    {
      src: tobyImage12,
      alt: "Toby on the prowl",
    },
    {
      src: tobyImage13,
      alt: "Toby prowling ready to activate",
    },
    {
      src: tobyImage14,
      alt: "Toby cuddles",
    },
    {
      src: tobyImage15,
      alt: "Toby stare",
    },
    {
      src: tobyImage16,
      alt: "Toby and the play gym",
    },
  ],
  torch: [
    {
      src: torchImage1,
      alt: "Torch soop face",
    },
    {
      src: torchImage2,
      alt: "Torch big mlem",
    },
    {
      src: torchImage3,
      alt: "Torch nicely decorated",
    },
    {
      src: torchImage4,
      alt: "Torch doing a nibble",
    },
    {
      src: torchImage5,
      alt: "Torch doing good scritch",
    },
    {
      src: torchImage6,
      alt: "Torch in qt cage",
    },
    {
      src: torchImage7,
      alt: "Torch locked in",
    },
    {
      src: torchImage8,
      alt: "Torch hiding in box",
    },
    {
      src: torchImage9,
      alt: "Torch: Whatcha got there?",
    },
    {
      src: torchImage10,
      alt: "Torch jazzercise, drawing by Shaye",
    },
    {
      src: torchImage11,
      alt: "Torch: I am just sitting here",
    },
    {
      src: torchImage12,
      alt: "Torch on blanky",
    },
    {
      src: torchImage13,
      alt: "Eepy Torch",
    },
    {
      src: torchImage14,
      alt: "Torch upside down tube",
    },
    {
      src: torchImage15,
      alt: "Torch yoga downward ferret",
    },
    {
      src: torchImage16,
      alt: "Torch yoga",
    },
    {
      src: torchImage17,
      alt: "Torch ready for action",
    },
    {
      src: torchImage18,
      alt: "Torch says hi",
    },
    {
      src: torchImage19,
      alt: "Torch hold",
    },
    {
      src: torchImage20,
      alt: "Full Mugshot of Torch",
    },
  ],
  tortilla: [
    {
      src: tortillaImage1,
      alt: "Taco bell cheesy rollup (Cheese and Tito)",
    },
    {
      src: tortillaImage2,
      alt: "Anti-tito climbing device",
    },
    {
      src: tortillaImage3,
      alt: "Tortilla being cute",
    },
    {
      src: tortillaImage4,
      alt: "Tortilla doing a beg",
    },
    {
      src: tortillaImage5,
      alt: "Tortilla on the cloud bed",
    },
    {
      src: tortillaImage6,
      alt: "Tortilla wants attention",
    },
    {
      src: tortillaImage7,
      alt: "Tortilla hold",
    },
    {
      src: tortillaImage8,
      alt: "Tortilla with a stick treat",
    },
  ],
  vincent: [
    {
      src: vincentImage1,
      alt: "Nacho, Onion and Vincent Playtime",
    },
    {
      src: vincentImage2,
      alt: "Nacho and Vincent Playtime",
    },
    {
      src: vincentImage3,
      alt: "Nacho and Vincent play",
    },
    {
      src: vincentImage4,
      alt: "Vinny mlem",
    },
    {
      src: vincentImage5,
      alt: "Full Mugshot of Vinny",
    },
    {
      src: vincentImage6,
      alt: "Vinny hold",
    },
    {
      src: vincentImage7,
      alt: "Vinny ponders leap",
    },
    {
      src: vincentImage8,
      alt: "Vinny scratch break",
    },
    {
      src: vincentImage9,
      alt: "Vinny shared snacking",
    },
    {
      src: vincentImage10,
      alt: "Vinny show teeth",
    },
    {
      src: vincentImage11,
      alt: "Vinny eating snack pt.1",
    },
    {
      src: vincentImage12,
      alt: "Vinny eating snack pt.2",
    },
    {
      src: vincentImage13,
      alt: "Vinny in toob",
    },
    {
      src: vincentImage14,
      alt: "Vinny watches",
    },
    {
      src: vincentImage15,
      alt: "Vinny at 1156g",
    },
    {
      src: vincentImage16,
      alt: "Vinny healthy at 1311g",
    },
    {
      src: vincentImage17,
      alt: "Vinny at 1kg",
    },
    {
      src: vincentImage18,
      alt: "Vinny at 660g",
    },
    {
      src: vincentImage19,
      alt: "Drawing of Vinny by Shaye",
    },
    {
      src: vincentImage20,
      alt: "Vinny stare",
    },
    {
      src: vincentImage21,
      alt: "Vinny and the castle",
    },
  ],
  whiskey: [
    {
      src: whiskeyImage1,
      alt: "Whiskey chilling with Mistoffelees",
    },
    {
      src: whiskeyImage2,
      alt: "Mistoffelees and Whiskey play with toy",
    },
    {
      src: whiskeyImage3,
      alt: "Pickle together with Whiskey wanting to play",
    },
    {
      src: whiskeyImage4,
      alt: "Whiskey confused",
    },
    {
      src: whiskeyImage5,
      alt: "Whiskey on the cloud bed",
    },
    {
      src: whiskeyImage6,
      alt: "Whiskey eepy",
    },
    {
      src: whiskeyImage7,
      alt: "Full Mugshot of Whiskey",
    },
  ],
  zero: [
    {
      src: zeroImage1,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: zeroImage2,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: zeroImage3,
      alt: "Beans cuddle with Onion and Grandpa",
    },
    {
      src: zeroImage4,
      alt: "Beans cuddle with Grandpa",
    },
    {
      src: zeroImage5,
      alt: "Eddie and Zero in barrels",
    },
    {
      src: zeroImage6,
      alt: "Grandpa and Henry",
    },
    {
      src: zeroImage7,
      alt: "Grandpa hidden under Henry",
    },
    {
      src: zeroImage8,
      alt: "Zero and Max cuddle",
    },
    {
      src: zeroImage9,
      alt: "Zero and Max cuddle buddies",
    },
    {
      src: zeroImage10,
      alt: "Zero and Max hug",
    },
    {
      src: zeroImage11,
      alt: "Zero and Mouse",
    },
    {
      src: zeroImage12,
      alt: "Grandpa loves cuddles",
    },
    {
      src: zeroImage13,
      alt: "Grandpa being cute",
    },
    {
      src: zeroImage14,
      alt: "Zero blep!",
    },
    {
      src: zeroImage15,
      alt: "Zero a long boi!",
    },
    {
      src: zeroImage16,
      alt: "Zero loves cuddling",
    },
    {
      src: zeroImage17,
      alt: "Zero's lump",
    },
    {
      src: zeroImage18,
      alt: "Eepy grandpa",
    },
    {
      src: zeroImage19,
      alt: "Very eepy grandpa",
    },
    {
      src: zeroImage20,
      alt: "Grandpa sleeping on seal",
    },
    {
      src: zeroImage21,
      alt: "Zero tail fur growing back",
    },
    {
      src: zeroImage22,
      alt: "Zero heart shaped",
    },
    {
      src: zeroImage23,
      alt: "Zero introduction picture",
    },
    {
      src: zeroImage24,
      alt: "Zero's lump which was removed",
    },
    {
      src: zeroImage25,
      alt: "Zero sleeping adorable",
    },
    {
      src: zeroImage26,
      alt: "Grandpa: Halp! Am stuck!",
    },
    {
      src: zeroImage27,
      alt: "Zero ready for action",
    },
  ],
};

export const getFerretImages = ((ferret: FerretKey | string) => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretImages[ferret];
}) as ((ferret: FerretKey) => FerretImages) &
  ((ferret: string) => FerretImages | undefined);

// Partial since new ferrets may be added without images
const ferretMugshots: {
  [key in FerretKey]: FerretImage;
} = {
  badger: {
    src: badgerMugshot,
    alt: "Mugshot of Badger",
  },
  bagel: {
    src: bagelMugshot,
    alt: "Mugshot of Bagel",
  },
  banana: {
    src: bananaMugshot,
    alt: "Mugshot of Banana",
  },
  bandit: {
    src: banditMugshot,
    alt: "Mugshot of Bandit",
  },
  beans: {
    src: beansMugshot,
    alt: "Mugshot of Beans",
  },
  beef: {
    src: beefMugshot,
    alt: "Mugshot of Beef",
  },
  bigmike: {
    src: bigmikeMugshot,
    alt: "Mugshot of Big Mike",
  },
  bruce: {
    src: bruceMugshot,
    alt: "Mugshot of Bruce",
  },
  cashew: {
    src: cashewMugshot,
    alt: "Mugshot of Cashew",
  },
  cheese: {
    src: cheeseMugshot,
    alt: "Mugshot of Cheese",
  },
  chili: {
    src: chiliMugshot,
    alt: "Mugshot of Chili",
  },
  cowboy: {
    src: cowboyMugshot,
    alt: "Mugshot of Cowboy",
  },
  demeter: {
    src: demeterMugshot,
    alt: "Mugshot of Demeter",
  },
  eddie: {
    src: eddieMugshot,
    alt: "Mugshot of Eddie",
  },
  felix: {
    src: felixMugshot,
    alt: "Mugshot of Felix",
  },
  fig: {
    src: figMugshot,
    alt: "Mugshot of Fig",
  },
  finn: {
    src: finnMugshot,
    alt: "Mugshot of Finn",
  },
  ghost: {
    src: ghostMugshot,
    alt: "Mugshot of Ghost",
  },
  hazelnut: {
    src: hazelnutMugshot,
    alt: "Mugshot of Hazelnut",
  },
  henry: {
    src: henryMugshot,
    alt: "Mugshot of Henry",
  },
  jack: {
    src: jackMugshot,
    alt: "Mugshot of Jack",
  },
  jasmine: {
    src: jasmineMugshot,
    alt: "Mugshot of Jasmine",
  },
  jinx: {
    src: jinxMugshot,
    alt: "Mugshot of Jinx",
  },
  kahlua: {
    src: kahluaMugshot,
    alt: "Mugshot of Kahlua",
  },
  kitty: {
    src: kittyMugshot,
    alt: "Mugshot of Kitty",
  },
  kylo: {
    src: kyloMugshot,
    alt: "Mugshot of Kylo",
  },
  kyo: {
    src: kyoMugshot,
    alt: "Mugshot of Kyo",
  },
  latte: {
    src: latteMugshot,
    alt: "Mugshot of Latte",
  },
  loki: {
    src: lokiMugshot,
    alt: "Mugshot of Loki",
  },
  louise: {
    src: louiseMugshot,
    alt: "Mugshot of Louise",
  },
  lucas: {
    src: lucasMugshot,
    alt: "Mugshot of Lucas",
  },
  lucky: {
    src: luckyMugshot,
    alt: "Mugshot of Lucky",
  },
  luna: {
    src: lunaMugshot,
    alt: "Mugshot of Luna",
  },
  maisy: {
    src: maisyMugshot,
    alt: "Mugshot of Maisy",
  },
  maitai: {
    src: maitaiMugshot,
    alt: "Mugshot of Mai Tai",
  },
  max: {
    src: maxMugshot,
    alt: "Mugshot of Max",
  },
  milo: {
    src: miloMugshot,
    alt: "Mugshot of Milo",
  },
  mimosa: {
    src: mimosaMugshot,
    alt: "Mugshot of Mimosa",
  },
  mishka: {
    src: mishkaMugshot,
    alt: "Mugshot of Mishka",
  },
  mistoffelees: {
    src: mistoffeleesMugshot,
    alt: "Mugshot of Mistoffelees",
  },
  mocha: {
    src: mochaMugshot,
    alt: "Mugshot of Mocha",
  },
  moose: {
    src: mooseMugshot,
    alt: "Mugshot of Moose",
  },
  mouse: {
    src: mouseMugshot,
    alt: "Mugshot of Mouse",
  },
  moxie: {
    src: moxieMugshot,
    alt: "Mugshot of Moxie",
  },
  nacho: {
    src: nachoMugshot,
    alt: "Mugshot of Nacho",
  },
  odin: {
    src: odinMugshot,
    alt: "Mugshot of Odin",
  },
  onion: {
    src: onionMugshot,
    alt: "Mugshot of Onion",
  },
  peanut: {
    src: peanutMugshot,
    alt: "Mugshot of Peanut",
  },
  peanut2: {
    src: peanut2Mugshot,
    alt: "Mugshot of Peanut 2",
  },
  peepo: {
    src: peepoMugshot,
    alt: "Mugshot of Peepo",
  },
  pepper: {
    src: pepperMugshot,
    alt: "Mugshot of Pepper",
  },
  pepper2: {
    src: pepper2Mugshot,
    alt: "Mugshot of Pepper 2",
  },
  pickle: {
    src: pickleMugshot,
    alt: "Mugshot of Pickle",
  },
  rose: {
    src: roseMugshot,
    alt: "Mugshot of Rose",
  },
  roxy: {
    src: roxyMugshot,
    alt: "Mugshot of Roxy",
  },
  rusty: {
    src: rustyMugshot,
    alt: "Mugshot of Rusty",
  },
  sai: {
    src: saiMugshot,
    alt: "Mugshot of Sai",
  },
  salsa: {
    src: salsaMugshot,
    alt: "Mugshot of Salsa",
  },
  salt: {
    src: saltMugshot,
    alt: "Mugshot of Salt",
  },
  salt2: {
    src: salt2Mugshot,
    alt: "Mugshot of Salt 2",
  },
  scotch: {
    src: scotchMugshot,
    alt: "Mugshot of Scotch",
  },
  skye: {
    src: skyeMugshot,
    alt: "Mugshot of Skye",
  },
  snails: {
    src: snailsMugshot,
    alt: "Mugshot of Snails",
  },
  snowball: {
    src: snowballMugshot,
    alt: "Mugshot of Snowball",
  },
  spud: {
    src: spudMugshot,
    alt: "Mugshot of Spud",
  },
  teep: {
    src: teepMugshot,
    alt: "Mugshot of Teep",
  },
  thelma: {
    src: thelmaMugshot,
    alt: "Mugshot of Thelma",
  },
  toby: {
    src: tobyMugshot,
    alt: "Mugshot of Toby",
  },
  torch: {
    src: torchMugshot,
    alt: "Mugshot of Torch",
  },
  tortilla: {
    src: tortillaMugshot,
    alt: "Mugshot of Tortilla",
  },
  vincent: {
    src: vincentMugshot,
    alt: "Mugshot of Vincent",
  },
  whiskey: {
    src: whiskeyMugshot,
    alt: "Mugshot of Whiskey",
  },
  zero: {
    src: zeroMugshot,
    alt: "Mugshot of Zero",
  },
};

export const getFerretMugshot = (
  ferret: FerretKey | string,
): FerretImage | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretMugshots[ferret];
};

const ferretEmoteImages: Partial<{
  [key in FerretKey]: FerretImages;
}> = {
  beans: [
    {
      src: beansYarrAww,
      alt: "Beans's yarrAww emote",
    },
    {
      src: beansYarrBeans,
      alt: "Beans's yarrBeans emote",
    },
    {
      src: beansYarrBite,
      alt: "Beans's yarrBite emote",
    },
    {
      src: beansYarrBluh,
      alt: "Beans's yarrBluh emote",
    },
    {
      src: beansYarrBrows,
      alt: "Beans's yarrBrows emote",
    },
    {
      src: beansYarrChaos,
      alt: "Beans's yarrChaos emote",
    },
    {
      src: beansYarrChatMD,
      alt: "Beans's yarrChatMD emote",
    },
    {
      src: beansYarrComfy,
      alt: "Beans's yarrComfy emote",
    },
    {
      src: beansYarrCult,
      alt: "Beans's yarrCult emote",
    },
    {
      src: beansYarrCultist,
      alt: "Beans's yarrCultist emote",
    },
    {
      src: beansYarrD,
      alt: "Beans's yarrD emote",
    },
    {
      src: beansYarrDance,
      alt: "Beans's yarrDance emote",
    },
    {
      src: beansYarrDemocracy,
      alt: "Beans's yarrDemocracy emote",
    },
    {
      src: beansYarrFear,
      alt: "Beans's yarrFear emote",
    },
    {
      src: beansYarrFine,
      alt: "Beans's yarrFine emote",
    },
    {
      src: beansYarrHey,
      alt: "Beans's yarrHey emote",
    },
    {
      src: beansYarrHmm,
      alt: "Beans's yarrHmm emote",
    },
    {
      src: beansYarrHype,
      alt: "Beans's yarrHype emote",
    },
    {
      src: beansYarrLick,
      alt: "Beans's yarrLick emote",
    },
    {
      src: beansYarrLook,
      alt: "Beans's yarrLook emote",
    },
    {
      src: beansYarrLove,
      alt: "Beans's yarrLove emote",
    },
    {
      src: beansYarrLUL,
      alt: "Beans's yarrLUL emote",
    },
    {
      src: beansYarrMYAA,
      alt: "Beans's yarrMYAA emote",
    },
    {
      src: beansYarrNerd,
      alt: "Beans's yarrNerd emote",
    },
    {
      src: beansYarrNodders,
      alt: "Beans's yarrNodders emote",
    },
    {
      src: beansYarrNotes,
      alt: "Beans's yarrNotes emote",
    },
    {
      src: beansYarrPet,
      alt: "Beans's yarrPet emote",
    },
    {
      src: beansYarrPrime,
      alt: "Beans's yarrPrime emote",
    },
    {
      src: beansYarrRabid,
      alt: "Beans's yarrRabid emote",
    },
    {
      src: beansYarrRad,
      alt: "Beans's yarrRad emote",
    },
    {
      src: beansYarrSadge,
      alt: "Beans's yarrSadge emote",
    },
    {
      src: beansYarrSalute,
      alt: "Beans's yarrSalute emote",
    },
    {
      src: beansYarrSip,
      alt: "Beans's yarrSip emote",
    },
    {
      src: beansYarrSpicy,
      alt: "Beans's yarrSpicy emote",
    },
    {
      src: beansYarrStinks,
      alt: "Beans's yarrStinks emote",
    },
    {
      src: beansYarrStinky,
      alt: "Beans's yarrStinky emote",
    },
    {
      src: beansYarrStonks,
      alt: "Beans's yarrStonks emote",
    },
    {
      src: beansYarrWave,
      alt: "Beans's yarrWave emote",
    },
    {
      src: beansYarrWhy,
      alt: "Beans's yarrWhy emote",
    },
    {
      src: beansYarrWOW,
      alt: "Beans's yarrWOW emote",
    },
  ],
  lucky: [
    {
      src: luckyDookSniff,
      alt: "Lucky's dookSniff emote",
    },
  ],
  mouse: [
    {
      src: mouseDookHype,
      alt: "Mouse's dookHype emote",
    },
    {
      src: mouseDookLurk,
      alt: "Mouse's dookLurk emote",
    },
  ],
  pickle: [
    {
      src: pickleDookReally,
      alt: "Pickle's dookReally emote",
    },
    {
      src: pickleYarrBongos,
      alt: "Pickle's yarrBongos emote",
    },
    {
      src: pickleYarrGlue,
      alt: "Pickle's yarrGlue emote",
    },
    {
      src: pickleYarrGrass,
      alt: "Pickle's yarrGrass emote",
    },
  ],
  snails: [
    {
      src: snailsYarrDumpy,
      alt: "Snails's yarrDumpy emote",
    },
  ],
  vincent: [
    {
      src: vincentDookThink,
      alt: "Vincent's dookThink emote",
    },
  ],
};

export const getFerretEmoteImages = (
  ferret: FerretKey | string,
): FerretImages | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretEmoteImages[ferret];
};
