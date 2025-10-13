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
import bagelImage1 from "../assets/ferrets/bagel/01.png";
import bagelImage2 from "../assets/ferrets/bagel/02.png";
import bagelImage3 from "../assets/ferrets/bagel/03.png";
import bagelImage4 from "../assets/ferrets/bagel/04.png";
import bagelImage5 from "../assets/ferrets/bagel/05.jpg";
import bagelImage6 from "../assets/ferrets/bagel/06.png";
import bagelImage7 from "../assets/ferrets/bagel/07.png";
import bananaImage1 from "../assets/ferrets/banana/01.jpg";
import bananaImage2 from "../assets/ferrets/banana/02.jpg";
import bananaImage3 from "../assets/ferrets/banana/03.jpg";
import bananaImage4 from "../assets/ferrets/banana/04.jpg";
import banditImage1 from "../assets/ferrets/bandit/01.jpg";
import banditImage2 from "../assets/ferrets/bandit/02.jpg";
import banditImage3 from "../assets/ferrets/bandit/03.jpg";
import banditImage4 from "../assets/ferrets/bandit/04.jpg";
import banditImage5 from "../assets/ferrets/bandit/05.jpg";
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
import bigmikeImage1 from "../assets/ferrets/bigmike/01.jpg";
import bigmikeImage2 from "../assets/ferrets/bigmike/02.jpg";
import bigmikeImage3 from "../assets/ferrets/bigmike/03.jpg";
import bruceImage1 from "../assets/ferrets/bruce/01.jpg";
import bruceImage2 from "../assets/ferrets/bruce/02.jpg";
import bruceImage3 from "../assets/ferrets/bruce/03.jpg";
import bruceImage4 from "../assets/ferrets/bruce/04.jpg";
import bruceImage5 from "../assets/ferrets/bruce/05.jpg";
import cheeseImage1 from "../assets/ferrets/cheese/01.jpg";
import cheeseImage2 from "../assets/ferrets/cheese/02.jpg";
import cheeseImage3 from "../assets/ferrets/cheese/03.jpg";
import cheeseImage4 from "../assets/ferrets/cheese/04.jpg";
import cowboyImage1 from "../assets/ferrets/cowboy/01.jpg";
import cowboyImage2 from "../assets/ferrets/cowboy/02.jpg";
import demeterImage1 from "../assets/ferrets/demeter/01.jpg";
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
import felixImage1 from "../assets/ferrets/felix/01.png";
import felixImage2 from "../assets/ferrets/felix/02.png";
import felixImage3 from "../assets/ferrets/felix/03.jpg";
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
import figImage19 from "../assets/ferrets/fig/19.jpg";
import figImage20 from "../assets/ferrets/fig/20.jpg";
import figImage21 from "../assets/ferrets/fig/21.jpg";
import figImage22 from "../assets/ferrets/fig/22.jpg";
import figImage23 from "../assets/ferrets/fig/23.jpg";
import finnImage1 from "../assets/ferrets/finn/01.png";
import finnImage2 from "../assets/ferrets/finn/02.png";
import finnImage3 from "../assets/ferrets/finn/03.jpg";
import finnImage4 from "../assets/ferrets/finn/04.png";
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
import henryImage14 from "../assets/ferrets/henry/14.jpg";
import henryImage15 from "../assets/ferrets/henry/15.jpg";
import henryImage16 from "../assets/ferrets/henry/16.jpg";
import henryImage17 from "../assets/ferrets/henry/17.png";
import henryImage18 from "../assets/ferrets/henry/18.jpg";
import henryImage19 from "../assets/ferrets/henry/19.jpg";
import henryImage20 from "../assets/ferrets/henry/20.jpg";
import henryImage21 from "../assets/ferrets/henry/21.jpg";
import henryImage22 from "../assets/ferrets/henry/22.jpg";
import henryImage23 from "../assets/ferrets/henry/23.jpg";
import henryImage24 from "../assets/ferrets/henry/24.jpg";
import henryImage25 from "../assets/ferrets/henry/25.jpg";
import henryImage26 from "../assets/ferrets/henry/26.jpg";
import henryImage27 from "../assets/ferrets/henry/27.png";
import henryImage28 from "../assets/ferrets/henry/28.jpg";
import henryImage29 from "../assets/ferrets/henry/29.jpg";
import henryImage30 from "../assets/ferrets/henry/30.jpg";
import henryImage31 from "../assets/ferrets/henry/31.jpg";
import henryImage32 from "../assets/ferrets/henry/32.jpg";
import henryImage33 from "../assets/ferrets/henry/33.png";
import henryImage34 from "../assets/ferrets/henry/34.jpg";
import henryImage35 from "../assets/ferrets/henry/35.jpg";
import henryImage36 from "../assets/ferrets/henry/36.jpg";
import henryImage37 from "../assets/ferrets/henry/37.jpg";
import henryImage38 from "../assets/ferrets/henry/38.jpg";
import henryImage39 from "../assets/ferrets/henry/39.jpg";
import henryImage40 from "../assets/ferrets/henry/40.jpg";
import henryImage41 from "../assets/ferrets/henry/41.jpg";
import henryImage42 from "../assets/ferrets/henry/42.jpg";
import henryImage43 from "../assets/ferrets/henry/43.jpg";
import henryImage44 from "../assets/ferrets/henry/44.jpg";
import henryImage45 from "../assets/ferrets/henry/45.png";
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
import henryImage56 from "../assets/ferrets/henry/56.jpg";
import henryImage57 from "../assets/ferrets/henry/57.jpg";
import henryImage58 from "../assets/ferrets/henry/58.jpg";
import henryImage59 from "../assets/ferrets/henry/59.png";
import henryImage60 from "../assets/ferrets/henry/60.jpg";
import henryImage61 from "../assets/ferrets/henry/61.png";
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
import henryImage72 from "../assets/ferrets/henry/72.jpg";
import henryImage73 from "../assets/ferrets/henry/73.jpg";
import henryImage74 from "../assets/ferrets/henry/74.jpg";
import jasmineImage1 from "../assets/ferrets/jasmine/01.jpg";
import jasmineImage2 from "../assets/ferrets/jasmine/02.jpg";
import jasmineImage3 from "../assets/ferrets/jasmine/03.jpg";
import jinxImage1 from "../assets/ferrets/jinx/01.jpg";
import kahluaImage1 from "../assets/ferrets/kahlua/01.jpg";
import kittyImage1 from "../assets/ferrets/kitty/01.jpg";
import kyloImage1 from "../assets/ferrets/kylo/01.jpg";
import kyloImage2 from "../assets/ferrets/kylo/02.jpg";
import kyloImage3 from "../assets/ferrets/kylo/03.jpg";
import kyloImage4 from "../assets/ferrets/kylo/04.jpg";
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
import lokiImage18 from "../assets/ferrets/loki/18.png";
import louiseImage1 from "../assets/ferrets/louise/01.jpg";
import lucasImage1 from "../assets/ferrets/lucas/01.jpg";
import lucasImage2 from "../assets/ferrets/lucas/02.jpg";
import lucasImage3 from "../assets/ferrets/lucas/03.jpg";
import luckyImage1 from "../assets/ferrets/lucky/01.jpg";
import lunaImage1 from "../assets/ferrets/luna/01.jpg";
import lunaImage2 from "../assets/ferrets/luna/02.jpg";
import maisyImage1 from "../assets/ferrets/maisy/01.jpg";
import maisyImage2 from "../assets/ferrets/maisy/02.jpg";
import maisyImage3 from "../assets/ferrets/maisy/03.jpg";
import maisyImage4 from "../assets/ferrets/maisy/04.jpg";
import miloImage1 from "../assets/ferrets/milo/01.jpg";
import miloImage2 from "../assets/ferrets/milo/02.jpg";
import miloImage3 from "../assets/ferrets/milo/03.jpg";
import miloImage4 from "../assets/ferrets/milo/04.jpg";
import miloImage5 from "../assets/ferrets/milo/05.jpg";
import mishkaImage1 from "../assets/ferrets/mishka/01.jpg";
import mistoffeleesImage1 from "../assets/ferrets/mistoffelees/01.jpg";
import mistoffeleesImage2 from "../assets/ferrets/mistoffelees/02.jpg";
import mistoffeleesImage3 from "../assets/ferrets/mistoffelees/03.jpg";
import mochaImage1 from "../assets/ferrets/mocha/01.jpg";
import mochaImage2 from "../assets/ferrets/mocha/02.jpg";
import mouseImage1 from "../assets/ferrets/mouse/01.jpg";
import mouseImage2 from "../assets/ferrets/mouse/02.jpg";
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
import moxieImage14 from "../assets/ferrets/moxie/14.jpg";
import onionImage1 from "../assets/ferrets/onion/01.jpg";
import onionImage2 from "../assets/ferrets/onion/02.jpg";
import onionImage3 from "../assets/ferrets/onion/03.jpg";
import onionImage4 from "../assets/ferrets/onion/04.jpg";
import peanutImage1 from "../assets/ferrets/peanut/01.jpg";
import peanutImage2 from "../assets/ferrets/peanut/02.jpg";
import peanutImage3 from "../assets/ferrets/peanut/03.jpg";
import peanutImage4 from "../assets/ferrets/peanut/04.jpg";
import peanutImage5 from "../assets/ferrets/peanut/05.jpg";
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
import pepper2Image1 from "../assets/ferrets/pepper2/01.png";
import pepper2Image2 from "../assets/ferrets/pepper2/02.jpg";
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
import rustyImage1 from "../assets/ferrets/rusty/01.jpg";
import saiImage1 from "../assets/ferrets/sai/01.jpg";
import saiImage2 from "../assets/ferrets/sai/02.jpg";
import snailsImage1 from "../assets/ferrets/snails/01.jpg";
import snailsImage2 from "../assets/ferrets/snails/02.jpg";
import snailsImage3 from "../assets/ferrets/snails/03.jpg";
import snailsImage4 from "../assets/ferrets/snails/04.jpg";
import snailsImage5 from "../assets/ferrets/snails/05.jpg";
import snailsImage6 from "../assets/ferrets/snails/06.png";
import spudImage1 from "../assets/ferrets/spud/01.jpg";
import teepImage1 from "../assets/ferrets/teep/01.jpg";
import teepImage2 from "../assets/ferrets/teep/02.jpg";
import teepImage3 from "../assets/ferrets/teep/03.jpg";
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
      alt: "Curious Badger",
    },
    {
      src: badgerImage2,
      alt: "Curly Badger",
    },
    {
      src: badgerImage3,
      alt: "Badger, Mushroom and a Snake",
    },
    {
      src: badgerImage4,
      alt: "Badger in a box of rice",
    },
    {
      src: badgerImage5,
      alt: "Badger Vampire Moment",
    },
    {
      src: badgerImage6,
      alt: "Sleepy Badger",
    },
    {
      src: badgerImage7,
      alt: "Badger looking like a badger",
    },
    {
      src: badgerImage8,
      alt: "Badger splooting",
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
      alt: "Bagel asleep in the cloud bed",
    },
    {
      src: bagelImage6,
      alt: "Bagel sleeps on Peanut 2",
    },
    {
      src: bagelImage7,
      alt: "Peanut 2, Bagel, and Pepper 2 at the soop",
    },
  ],
  banana: [
    {
      src: bananaImage1,
      alt: "Banana and Eddie cuddle",
    },
    {
      src: bananaImage2,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
    },
    {
      src: bananaImage3,
      alt: "Banana, Eddie and Zero cuddle",
    },
    {
      src: bananaImage4,
      alt: "Banana and Loki taking a bath",
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
      alt: "eepy Beans",
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
      alt: "Beans is liquid",
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
      alt: "Beans visit wet-world with Beef, Cheese, Loki, Snails",
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
      alt: "Beans visit wet-world with Beef, Cheese, Loki, Snails",
    },
    {
      src: beefImage2,
      alt: "Beef sleepy on the couch",
    },
    {
      src: beefImage3,
      alt: "Cute Beef",
    },
    {
      src: beefImage4,
      alt: "Beef Mlem!",
    },
    {
      src: beefImage5,
      alt: "Beef in the petstore",
    },
    {
      src: beefImage6,
      alt: "Beef seasonal receding hairline",
    },
    {
      src: beefImage7,
      alt: "Beef seasonal receding hairline 2",
    },
    {
      src: beefImage8,
      alt: "Beef finger",
    },
    {
      src: beefImage9,
      alt: "Beef on sofa",
    },
    {
      src: beefImage10,
      alt: "Beef snuggle blanky",
    },
    {
      src: beefImage11,
      alt: "Some wet Beef",
    },
    {
      src: beefImage12,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: beefImage13,
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
  ],
  cheese: [
    {
      src: cheeseImage1,
      alt: "Beans visit wet-world with Beef, Cheese, Loki, Snails",
    },
    {
      src: cheeseImage2,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: cheeseImage3,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: cheeseImage4,
      alt: "Loki and Cheese at the Vet",
    },
  ],
  cowboy: [
    {
      src: cowboyImage1,
      alt: "Fig and Cowboy in wicker basket",
    },
    {
      src: cowboyImage2,
      alt: "Henry cuddling Cowboy",
    },
  ],
  demeter: [
    {
      src: demeterImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
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
      alt: "Eddie poops on Beans * (And Short Link )",
    },
    {
      src: eddieImage5,
      alt: "Eddie says hello",
    },
    {
      src: eddieImage6,
      alt: "Eddie being cute",
    },
    {
      src: eddieImage7,
      alt: "Eddie in blanky",
    },
    {
      src: eddieImage8,
      alt: "Eddie on cat tree",
    },
    {
      src: eddieImage9,
      alt: "Comfy Ed",
    },
    {
      src: eddieImage10,
      alt: "curly Eddie",
    },
    {
      src: eddieImage11,
      alt: "eepy Eddie",
    },
    {
      src: eddieImage12,
      alt: "eepy Eddie",
    },
    {
      src: eddieImage13,
      alt: "Full Mugshot of Eddie",
    },
    {
      src: eddieImage14,
      alt: "Eddie noms soup",
    },
    {
      src: eddieImage15,
      alt: "Eddie: AAAAA",
    },
    {
      src: eddieImage16,
      alt: "Eddie (Left) and Fig (Right) Snuggle in Hunny Pot",
    },
    {
      src: eddieImage17,
      alt: "Eddie (Left) and Fig (Right) Snuggle in Hunny Pot",
    },
    {
      src: eddieImage18,
      alt: "Eppy Henry and cuddle fren Eddie",
    },
    {
      src: eddieImage19,
      alt: "Eddie and Loki pretzel",
    },
    {
      src: eddieImage20,
      alt: "Eddie and Loki snuggle",
    },
    {
      src: eddieImage21,
      alt: "Eddie and Mishka pretzel",
    },
    {
      src: eddieImage22,
      alt: "Mouse cleaning Eddie's ears",
    },
    {
      src: eddieImage23,
      alt: "Eddie and Zero in barrels",
    },
  ],
  felix: [
    {
      src: felixImage1,
      alt: "Finn (bottom) and Felix (top) snuggle in a carrier on the way to the ER",
    },
    {
      src: felixImage2,
      alt: "Finn (top) and Felix (bottom) in a carrier",
    },
    {
      src: felixImage3,
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
      alt: "Eddie (Left) and Fig (Right) Snuggle in Hunny Pot",
    },
    {
      src: figImage4,
      alt: "Fig being cute",
    },
    {
      src: figImage5,
      alt: "Fig sniff the mod",
    },
    {
      src: figImage6,
      alt: "Fig wants pet",
    },
    {
      src: figImage7,
      alt: "Fig slow eep",
    },
    {
      src: figImage8,
      alt: "Sleepy Fig",
    },
    {
      src: figImage9,
      alt: "Fig nose",
    },
    {
      src: figImage10,
      alt: "Fig sleep in the Wicker Basket",
    },
    {
      src: figImage11,
      alt: "Fig at the water bowl",
    },
    {
      src: figImage12,
      alt: "Fig sniffa",
    },
    {
      src: figImage13,
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: figImage14,
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: figImage15,
      alt: "Fig and Henry cuddle",
    },
    {
      src: figImage16,
      alt: "Fig kissa Henry",
    },
    {
      src: figImage17,
      alt: "Fig love Henry",
    },
    {
      src: figImage18,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: figImage19,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: figImage20,
      alt: "Fig and Moxie nomm some soup",
    },
    {
      src: figImage21,
      alt: "Fig and Moxie nomm some soup",
    },
    {
      src: figImage22,
      alt: "Fig in mango with Teep pt.2",
    },
    {
      src: figImage23,
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
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: henryImage5,
      alt: "Fig and Henry cuddle",
    },
    {
      src: henryImage6,
      alt: "Fig kissa Henry",
    },
    {
      src: henryImage7,
      alt: "Fig love Henry",
    },
    {
      src: henryImage8,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: henryImage9,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: henryImage10,
      alt: "Ester Henry with hat and bow tie",
    },
    {
      src: henryImage11,
      alt: "Easter Henry sleeping with eggs",
    },
    {
      src: henryImage12,
      alt: "Lion King Henry",
    },
    {
      src: henryImage13,
      alt: "Easter Henry",
    },
    {
      src: henryImage14,
      alt: "Lion King Henry part two",
    },
    {
      src: henryImage15,
      alt: "Henry bearing axolotls for soup noms.",
    },
    {
      src: henryImage16,
      alt: "Henry comfy",
    },
    {
      src: henryImage17,
      alt: "Henry does a rawr",
    },
    {
      src: henryImage18,
      alt: "Henry Snuggles in Hunny Pot",
    },
    {
      src: henryImage19,
      alt: "Henry making big steppies",
    },
    {
      src: henryImage20,
      alt: "Henry photoshoot by shaye part one",
    },
    {
      src: henryImage21,
      alt: "Henry photoshoot by shaye part two",
    },
    {
      src: henryImage22,
      alt: "Henry photoshoot by shaye part three",
    },
    {
      src: henryImage23,
      alt: "Henry photoshoot by shaye part four",
    },
    {
      src: henryImage24,
      alt: "Henry photoshoot by shaye part five, he on the way to steal your heart.",
    },
    {
      src: henryImage25,
      alt: "Henry photoshoot by shaye part six",
    },
    {
      src: henryImage26,
      alt: "Stand by, Henry recharging.",
    },
    {
      src: henryImage27,
      alt: "Henry turned Pretzel",
    },
    {
      src: henryImage28,
      alt: "Henry playing in some rice, unsure if liked",
    },
    {
      src: henryImage29,
      alt: "eepy Henry on a rug",
    },
    {
      src: henryImage30,
      alt: "Henry goes back to sleep land",
    },
    {
      src: henryImage31,
      alt: "Henry eepy",
    },
    {
      src: henryImage32,
      alt: "Henry sleep distrubed by camera",
    },
    {
      src: henryImage33,
      alt: "Henry speaks to us again!",
    },
    {
      src: henryImage34,
      alt: "Henry toobs",
    },
    {
      src: henryImage35,
      alt: "Henry loves the frog",
    },
    {
      src: henryImage36,
      alt: "Henry and the frog",
    },
    {
      src: henryImage37,
      alt: "Henry chilling on the blanky",
    },
    {
      src: henryImage38,
      alt: "Henry contemplating soop",
    },
    {
      src: henryImage39,
      alt: "Henry the perfect cinnamon roll.",
    },
    {
      src: henryImage40,
      alt: "Henry with his froggy hat being very eepy",
    },
    {
      src: henryImage41,
      alt: "Henry with his froggy hat, so very eepy",
    },
    {
      src: henryImage42,
      alt: "Henry with his froggy hat",
    },
    {
      src: henryImage43,
      alt: "Henry the egg-o monster",
    },
    {
      src: henryImage44,
      alt: "Henry with tiny frog hat",
    },
    {
      src: henryImage45,
      alt: "Gangstah Henry",
    },
    {
      src: henryImage46,
      alt: "Henry halloween, very spook",
    },
    {
      src: henryImage47,
      alt: "Henry's satisfying poop face",
    },
    {
      src: henryImage48,
      alt: "Henry poop stance",
    },
    {
      src: henryImage49,
      alt: "Henry sleeping under blanky",
    },
    {
      src: henryImage50,
      alt: "Sleepy boi Henry!",
    },
    {
      src: henryImage51,
      alt: "Henry slipping in!",
    },
    {
      src: henryImage52,
      alt: "Henry solo sooping without support",
    },
    {
      src: henryImage53,
      alt: "Henry held infront of a bush",
    },
    {
      src: henryImage54,
      alt: "Henry touches grass, finds it comfy",
    },
    {
      src: henryImage55,
      alt: "Henry touches grass",
    },
    {
      src: henryImage56,
      alt: "Henry touches grass, confirmed not a vtuber",
    },
    {
      src: henryImage57,
      alt: "Henry in a tree, doing a explore",
    },
    {
      src: henryImage58,
      alt: "Henry very eepy",
    },
    {
      src: henryImage59,
      alt: "Very sleepy Henry",
    },
    {
      src: henryImage60,
      alt: "Henry's long whisker",
    },
    {
      src: henryImage61,
      alt: "Henry speaks to us",
    },
    {
      src: henryImage62,
      alt: "Henry fell into the soup",
    },
    {
      src: henryImage63,
      alt: "Drawing of Henry",
    },
    {
      src: henryImage64,
      alt: "Henry being the perfect cinnamon roll",
    },
    {
      src: henryImage65,
      alt: "Sleepy cinnamon roll Henry.",
    },
    {
      src: henryImage66,
      alt: "Henry very sleepy with toy",
    },
    {
      src: henryImage67,
      alt: "Henry eeps in the frogo bed",
    },
    {
      src: henryImage68,
      alt: "Henry snuggling together with Mocha",
    },
    {
      src: henryImage69,
      alt: "Henry cuddling Mocha",
    },
    {
      src: henryImage70,
      alt: "Moxie snuggle with Henry",
    },
    {
      src: henryImage71,
      alt: "Moxie is scarf for Henry",
    },
    {
      src: henryImage72,
      alt: "Teep grooming Henry",
    },
    {
      src: henryImage73,
      alt: "Grandpa and Henry",
    },
    {
      src: henryImage74,
      alt: "Grandpa hidden under Henry",
    },
  ],
  jasmine: [
    {
      src: jasmineImage1,
      alt: "Jasmine Mugshot full",
    },
    {
      src: jasmineImage2,
      alt: "Jasmine cuddling with Luna and Peanut 2",
    },
    {
      src: jasmineImage3,
      alt: "Jasmine and eepy Moxie",
    },
  ],
  jinx: [
    {
      src: jinxImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
  ],
  kahlua: [
    {
      src: kahluaImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
  ],
  kitty: [
    {
      src: kittyImage1,
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
  loki: [
    {
      src: lokiImage1,
      alt: "Banana and Loki taking a bath",
    },
    {
      src: lokiImage2,
      alt: "Beans visit wet-world with Beef, Cheese, Loki, Snails",
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
      alt: "Loki and Snails rare bath time",
    },
    {
      src: lokiImage16,
      alt: "Loki and Snails cuddle",
    },
    {
      src: lokiImage17,
      alt: "Loki and Snails kissies",
    },
    {
      src: lokiImage18,
      alt: "Loki and Snails pout",
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
  ],
  maisy: [
    {
      src: maisyImage1,
      alt: "Flat head Maisy",
    },
    {
      src: maisyImage2,
      alt: "Maisy gold by Maddie",
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
  mishka: [
    {
      src: mishkaImage1,
      alt: "Eddie and Mishka pretzel",
    },
  ],
  mistoffelees: [
    {
      src: mistoffeleesImage1,
      alt: "Mistoffelees, Pickle, and Peanut cuddle with Shaye",
    },
    {
      src: mistoffeleesImage2,
      alt: "Whiskey chilling with Mistoffelees",
    },
    {
      src: mistoffeleesImage3,
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
  ],
  mouse: [
    {
      src: mouseImage1,
      alt: "Beans getting kissies by Mouse",
    },
    {
      src: mouseImage2,
      alt: "Mouse cleaning Eddie's ears",
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
      alt: "Fig and Moxie nomm some soup",
    },
    {
      src: moxieImage5,
      alt: "Moxie snuggle with Henry",
    },
    {
      src: moxieImage6,
      alt: "Moxie is scarf for Henry",
    },
    {
      src: moxieImage7,
      alt: "Jasmine and eepy Moxie",
    },
    {
      src: moxieImage8,
      alt: "Kitty, Moxie and Rusty snuggle",
    },
    {
      src: moxieImage9,
      alt: "Moxie cataracts",
    },
    {
      src: moxieImage10,
      alt: "Moxie eepy",
    },
    {
      src: moxieImage11,
      alt: "Moxie nom soup",
    },
    {
      src: moxieImage12,
      alt: "Moxie has no time for babying",
    },
    {
      src: moxieImage13,
      alt: "Moxie comfy",
    },
    {
      src: moxieImage14,
      alt: "Moxie eepy",
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
      alt: "Mistoffelees, Pickle, and Peanut cuddle with Shaye",
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
  pepper2: [
    {
      src: pepper2Image1,
      alt: "Peanut 2, Bagel, and Pepper 2 at the soop",
    },
    {
      src: pepper2Image2,
      alt: "Eddie's tail & back legs in the middle of a snuggle pile with Banana, Peacenut, Pepperoni and Moxie",
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
  rusty: [
    {
      src: rustyImage1,
      alt: "Kitty, Moxie and Rusty snuggle",
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
  snails: [
    {
      src: snailsImage1,
      alt: "Beans visit wet-world with Beef, Cheese, Loki, Snails",
    },
    {
      src: snailsImage2,
      alt: "Loki (left) and Snails (right) with ear tags",
    },
    {
      src: snailsImage3,
      alt: "Loki and Snails rare bath time",
    },
    {
      src: snailsImage4,
      alt: "Loki and Snails cuddle",
    },
    {
      src: snailsImage5,
      alt: "Loki and Snails kissies",
    },
    {
      src: snailsImage6,
      alt: "Loki and Snails pout",
    },
  ],
  spud: [
    {
      src: spudImage1,
      alt: "Lucky, Pickle and Spud in Rice-Box",
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
      alt: "Beans cuddle with Onion and Grandpa",
    },
    {
      src: zeroImage3,
      alt: "Beans cuddle with Grandpa",
    },
    {
      src: zeroImage4,
      alt: "Eddie and Zero in barrels",
    },
    {
      src: zeroImage5,
      alt: "Grandpa and Henry",
    },
    {
      src: zeroImage6,
      alt: "Grandpa hidden under Henry",
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
