import styles from "./page.module.css";
import { Card, CardContent, Typography, Link, AppBar, Toolbar } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ backgroundColor: '#f5f5f5' }}>
        <AppBar position="static" style={{ backgroundColor: 'darkcyan' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            実績紹介
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.cardContainer} style={{ marginTop: '16px', paddingBottom: '16px' }}>
        <Card style={{ width: '800px' }}>
            <CardContent>
              <Image src="/portfolio/portfolio.png" alt="Card Image" width={770} height={150} style={{ objectFit: 'cover' }} />
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}> 
              システム開発歴は 25年以上 になります。Web アプリケーションを中心に、様々な要件・条件でのシステム開発承ります。<br />
                ・PHP、CakePHP、Laravel<br />
                ・Python、FastAPI<br />
                ・Javascript、jQuery、Next.js、React、MUI、Vue.js<br />
                ・kintone構築、運用、カスタマイズ（javascript、プラグイン）<br />
                ・Google Spreadsheetカスタマイズ（GAS）、他サービスとの連携<br />
                ・Azure、AWS、GCP、その他VPS（さくらインターネットVPS等）でのサーバー構築、運用<br />
                ・その他（VB、C++、C#）<br />
              </Typography>
            </CardContent>
          </Card>
          </div>
        <AppBar position="static" style={{ backgroundColor: 'darkcyan' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ポートフォリオ（公開可能なサービスのみ）
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.cardContainer} style={{ marginTop: '16px', paddingBottom: '16px' }}>
          <Card style={{ width: '800px' }}>
            <CardContent>
              <Image src="/portfolio/edc.png" alt="Card Image" width={770} height={150} style={{ objectFit: 'cover' }} />
              <Typography variant="h5" component="div">
                <Link href="https://secure.labowl.net/app-dms/" target="_blank" rel="noopener noreferrer">
                  CRO向け治験データ収集システム
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
                公開年: 2011
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}> 
                治験データ、臨床研究データをWeb経由で収集するシステム<br />
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
                ・kintoneのように項目を画面上から設定可能<br />
                ・入力データのバリデーションルールを画面上から設定可能<br />
                ・入力データ履歴を出力可能<br />
                ・臨床研究等でサービス提供の実績あり<br />
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: '800px' }}>
            <CardContent>
            <Image src="/portfolio/stocks.png" alt="Card Image" width={770} height={150} style={{ objectFit: 'cover' }} />
            <Typography variant="h5" component="div">
                <Link href="https://asakabu.labowl.net/" target="_blank" rel="noopener noreferrer">
                  株価予想サイト（習作）
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
                作成年: 2019
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
                時系列データを元に、翌日の株価を予想するサイト<br />
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginBottom: '8px' }}>
              ・AI(FANN)を使用してテクニカルデータを元に翌営業日の株価を予想する<br />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
